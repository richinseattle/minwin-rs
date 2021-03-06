use kernel32 as k32;
use std::{mem, ptr};
use std::io::{self, Read, Write};
use std::os::windows::io::{AsRawHandle, FromRawHandle};
use winapi as w;

use super::Pipe;
use handle::Handle;
use object::{Readable, Writable};
use util::*;



pub struct PipeBuilder {
    security_attributes: Option<w::SECURITY_ATTRIBUTES>,
    size: Option<u32>,
}

impl PipeBuilder {
    #[cfg_attr(feature = "clippy", allow(new_without_default))]
    pub fn new() -> PipeBuilder {
        PipeBuilder {
            security_attributes: None,
            size: None,
        }
    }

    pub fn size(&mut self, size: u32) -> &mut PipeBuilder {
        self.size = Some(size);
        self
    }

    pub fn create(&self) -> io::Result<(ReadPipe, WritePipe)> {
        let mut sa = self.security_attributes;

        unsafe {
            let mut read = mem::uninitialized();
            let mut write = mem::uninitialized();

            try!(check_bool(k32::CreatePipe(&mut read,
                                            &mut write,
                                            sa.as_mut().map_or(ptr::null_mut(), |sa| sa),
                                            self.size.unwrap_or(0))));
            let read = ReadPipe::from_raw_handle(read);
            let write = WritePipe::from_raw_handle(write);

            Ok((read, write))
        }
    }
}



#[derive(Debug)]
pub struct ReadPipe(Handle);

handle!(ReadPipe);

impl Readable for ReadPipe {}
impl Pipe for ReadPipe {}

impl Read for ReadPipe {
    fn read(&mut self, buf: &mut [u8]) -> io::Result<usize> {
        IoHelper(self).read(buf)
    }
}



#[derive(Debug)]
pub struct WritePipe(Handle);

handle!(WritePipe);

impl Writable for WritePipe {}
impl Pipe for WritePipe {}

impl Write for WritePipe {
    fn write(&mut self, buf: &[u8]) -> io::Result<usize> {
        IoHelper(self).write(buf)
    }

    fn flush(&mut self) -> io::Result<()> {
        IoHelper(self).flush()
    }
}

pub fn create_anonymous_pipe() -> io::Result<(ReadPipe, WritePipe)> {
    PipeBuilder::new().create()
}
