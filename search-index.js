var searchIndex = {};
searchIndex["minwin"] = {"doc":"","items":[[0,"access","minwin","",null,null],[3,"CustomAccess","minwin::access","",null,null],[12,"0","","",0,null],[3,"MaximumAccess","","",null,null],[3,"SystemSecurityAccess","","",null,null],[4,"GenericAccess","","",null,null],[13,"All","","",1,null],[13,"Read","","",1,null],[13,"Write","","",1,null],[13,"Execute","","",1,null],[4,"StandardAccess","","",null,null],[13,"Delete","","",2,null],[13,"ReadControl","","",2,null],[13,"WriteDac","","",2,null],[13,"WriteOwner","","",2,null],[13,"Synchronize","","",2,null],[8,"Access","","",null,null],[10,"mask","","",3,{"inputs":[{"name":"access"}],"output":{"name":"u32"}}],[8,"CombinableAccess","","",null,null],[11,"combine","","",4,{"inputs":[{"name":"combinableaccess"},{"name":"t"}],"output":{"name":"customaccess"}}],[11,"mask","","",0,{"inputs":[{"name":"customaccess"}],"output":{"name":"u32"}}],[11,"bitor","","",0,{"inputs":[{"name":"customaccess"},{"name":"t"}],"output":{"name":"customaccess"}}],[11,"mask","","",5,{"inputs":[{"name":"maximumaccess"}],"output":{"name":"u32"}}],[11,"mask","","",6,{"inputs":[{"name":"systemsecurityaccess"}],"output":{"name":"u32"}}],[11,"bitor","","",6,{"inputs":[{"name":"systemsecurityaccess"},{"name":"t"}],"output":{"name":"customaccess"}}],[11,"eq","","",1,{"inputs":[{"name":"genericaccess"},{"name":"genericaccess"}],"output":{"name":"bool"}}],[11,"clone","","",1,{"inputs":[{"name":"genericaccess"}],"output":{"name":"genericaccess"}}],[11,"fmt","","",1,{"inputs":[{"name":"genericaccess"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"mask","","",1,{"inputs":[{"name":"genericaccess"}],"output":{"name":"u32"}}],[11,"bitor","","",1,{"inputs":[{"name":"genericaccess"},{"name":"t"}],"output":{"name":"customaccess"}}],[11,"eq","","",2,{"inputs":[{"name":"standardaccess"},{"name":"standardaccess"}],"output":{"name":"bool"}}],[11,"clone","","",2,{"inputs":[{"name":"standardaccess"}],"output":{"name":"standardaccess"}}],[11,"fmt","","",2,{"inputs":[{"name":"standardaccess"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"mask","","",2,{"inputs":[{"name":"standardaccess"}],"output":{"name":"u32"}}],[11,"all","","",2,{"inputs":[],"output":{"name":"customaccess"}}],[11,"read","","",2,{"inputs":[],"output":{"name":"customaccess"}}],[11,"write","","",2,{"inputs":[],"output":{"name":"customaccess"}}],[11,"execute","","",2,{"inputs":[],"output":{"name":"customaccess"}}],[11,"required","","",2,{"inputs":[],"output":{"name":"customaccess"}}],[11,"bitor","","",2,{"inputs":[{"name":"standardaccess"},{"name":"t"}],"output":{"name":"customaccess"}}],[0,"handle","minwin","",null,null],[3,"Handle","minwin::handle","",null,null],[5,"duplicate","","",null,{"inputs":[{"name":"rawhandle"}],"output":{"name":"result"}}],[5,"set_inheritable","","",null,{"inputs":[{"name":"rawhandle"},{"name":"bool"}],"output":{"name":"result"}}],[5,"is_inheritable","","",null,{"inputs":[{"name":"rawhandle"}],"output":{"name":"result"}}],[5,"set_protected","","",null,{"inputs":[{"name":"rawhandle"},{"name":"bool"}],"output":{"name":"result"}}],[5,"is_protected","","",null,{"inputs":[{"name":"rawhandle"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"handle"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"drop","","",7,{"inputs":[{"name":"handle"}],"output":null}],[11,"from_raw_handle","","",7,{"inputs":[{"name":"rawhandle"}],"output":{"name":"handle"}}],[11,"as_raw_handle","","",7,{"inputs":[{"name":"handle"}],"output":{"name":"rawhandle"}}],[11,"into_raw_handle","","",7,{"inputs":[{"name":"handle"}],"output":{"name":"rawhandle"}}],[0,"named","minwin","",null,null],[4,"CreateNamedError","minwin::named","",null,null],[13,"AlreadyExists","","",8,null],[13,"NulError","","",8,null],[13,"Io","","",8,null],[6,"CreateNamedResult","","",null,null],[6,"NamedOpenFunction","","",null,null],[8,"NamedBuilder","","",null,null],[16,"Output","","",9,null],[11,"create","","",9,{"inputs":[{"name":"namedbuilder"}],"output":{"name":"result"}}],[11,"create_named","","",9,{"inputs":[{"name":"namedbuilder"},{"name":"n"}],"output":{"name":"createnamedresult"}}],[8,"NamedObject","","",null,null],[11,"open_named","","",10,{"inputs":[{"name":"n"}],"output":{"name":"result"}}],[11,"open_named_with_access","","",10,{"inputs":[{"name":"n"},{"name":"a"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"createnamederror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",8,{"inputs":[{"name":"createnamederror"}],"output":{"name":"str"}}],[11,"fmt","","",8,{"inputs":[{"name":"createnamederror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",8,{"inputs":[{"name":"error"}],"output":{"name":"createnamederror"}}],[11,"from","","",8,{"inputs":[{"name":"nulerror"}],"output":{"name":"createnamederror"}}],[11,"unwrap","","",8,{"inputs":[{"name":"createnamederror"}],"output":{"name":"option"}}],[0,"mapping","minwin","",null,null],[3,"FileMappingBuilder","minwin::mapping","",null,null],[3,"FileMapping","","",null,null],[3,"FileViewBuilder","","",null,null],[3,"FileView","","",null,null],[4,"FileMappingAttribute","","",null,null],[13,"Commit","","",11,null],[13,"Image","","",11,null],[13,"ImageNoExecute","","",11,null],[13,"LargePages","","",11,null],[13,"NoCache","","",11,null],[13,"Reserve","","",11,null],[13,"WriteCombine","","",11,null],[4,"FileMappingAccess","","",null,null],[13,"Read","","",12,null],[13,"Write","","",12,null],[13,"Execute","","",12,null],[4,"FileViewAccess","","",null,null],[13,"ReadOnly","","",13,null],[13,"ReadWrite","","",13,null],[13,"CopyOnWrite","","",13,null],[11,"eq","","",11,{"inputs":[{"name":"filemappingattribute"},{"name":"filemappingattribute"}],"output":{"name":"bool"}}],[11,"clone","","",11,{"inputs":[{"name":"filemappingattribute"}],"output":{"name":"filemappingattribute"}}],[11,"fmt","","",11,{"inputs":[{"name":"filemappingattribute"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",14,{"inputs":[{"name":"u64"}],"output":{"name":"filemappingbuilder"}}],[11,"from_file","","",14,{"inputs":[{"name":"f"}],"output":{"name":"filemappingbuilder"}}],[11,"size","","",14,{"inputs":[{"name":"filemappingbuilder"},{"name":"u64"}],"output":{"name":"filemappingbuilder"}}],[11,"write","","",14,{"inputs":[{"name":"filemappingbuilder"},{"name":"bool"}],"output":{"name":"filemappingbuilder"}}],[11,"execute","","",14,{"inputs":[{"name":"filemappingbuilder"},{"name":"bool"}],"output":{"name":"filemappingbuilder"}}],[11,"attribute","","",14,{"inputs":[{"name":"filemappingbuilder"},{"name":"filemappingattribute"}],"output":{"name":"filemappingbuilder"}}],[11,"attributes","","",14,null],[11,"name","","",14,{"inputs":[{"name":"filemappingbuilder"},{"name":"n"}],"output":{"name":"filemappingbuilder"}}],[11,"fmt","","",15,{"inputs":[{"name":"filemapping"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_raw_handle","","",15,{"inputs":[{"name":"rawhandle"}],"output":{"name":"filemapping"}}],[11,"as_raw_handle","","",15,{"inputs":[{"name":"filemapping"}],"output":{"name":"rawhandle"}}],[11,"into_raw_handle","","",15,{"inputs":[{"name":"filemapping"}],"output":{"name":"rawhandle"}}],[11,"eq","","",12,{"inputs":[{"name":"filemappingaccess"},{"name":"filemappingaccess"}],"output":{"name":"bool"}}],[11,"clone","","",12,{"inputs":[{"name":"filemappingaccess"}],"output":{"name":"filemappingaccess"}}],[11,"fmt","","",12,{"inputs":[{"name":"filemappingaccess"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"mask","","",12,{"inputs":[{"name":"filemappingaccess"}],"output":{"name":"u32"}}],[11,"all","","",12,{"inputs":[],"output":{"name":"customaccess"}}],[11,"bitor","","",12,{"inputs":[{"name":"filemappingaccess"},{"name":"t"}],"output":{"name":"customaccess"}}],[11,"create","","",15,{"inputs":[{"name":"u64"}],"output":{"name":"result"}}],[11,"create_named","","",15,{"inputs":[{"name":"n"},{"name":"u64"}],"output":{"name":"createnamedresult"}}],[11,"create_from_file","","",15,{"inputs":[{"name":"f"}],"output":{"name":"result"}}],[11,"full","","",15,{"inputs":[{"name":"filemapping"}],"output":{"name":"result"}}],[11,"range","","",15,{"inputs":[{"name":"filemapping"},{"name":"u64"},{"name":"usize"}],"output":{"name":"result"}}],[11,"view","","",15,{"inputs":[{"name":"filemapping"}],"output":{"name":"fileviewbuilder"}}],[11,"flush","","",15,{"inputs":[{"name":"filemapping"}],"output":{"name":"result"}}],[11,"eq","","",13,{"inputs":[{"name":"fileviewaccess"},{"name":"fileviewaccess"}],"output":{"name":"bool"}}],[11,"clone","","",13,{"inputs":[{"name":"fileviewaccess"}],"output":{"name":"fileviewaccess"}}],[11,"fmt","","",13,{"inputs":[{"name":"fileviewaccess"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"access","","",16,{"inputs":[{"name":"fileviewbuilder"},{"name":"fileviewaccess"}],"output":{"name":"fileviewbuilder"}}],[11,"execute","","",16,{"inputs":[{"name":"fileviewbuilder"},{"name":"bool"}],"output":{"name":"fileviewbuilder"}}],[11,"offset","","",16,{"inputs":[{"name":"fileviewbuilder"},{"name":"u64"}],"output":{"name":"fileviewbuilder"}}],[11,"size","","",16,{"inputs":[{"name":"fileviewbuilder"},{"name":"usize"}],"output":{"name":"fileviewbuilder"}}],[11,"map","","",16,{"inputs":[{"name":"fileviewbuilder"}],"output":{"name":"result"}}],[11,"as_ptr","","",17,null],[11,"as_mut_ptr","","",17,null],[11,"as_slice","","",17,null],[11,"as_mut_slice","","",17,null],[11,"flush_range","","",17,{"inputs":[{"name":"fileview"},{"name":"option"},{"name":"option"}],"output":{"name":"result"}}],[11,"flush","","",17,{"inputs":[{"name":"fileview"}],"output":{"name":"result"}}],[11,"drop","","",17,{"inputs":[{"name":"fileview"}],"output":null}],[0,"object","minwin","",null,null],[8,"Object","minwin::object","",null,null],[11,"set_inheritable","","",18,{"inputs":[{"name":"object"},{"name":"bool"}],"output":{"name":"result"}}],[11,"is_inheritable","","",18,{"inputs":[{"name":"object"}],"output":{"name":"result"}}],[11,"set_protected","","",18,{"inputs":[{"name":"object"},{"name":"bool"}],"output":{"name":"result"}}],[11,"is_protected","","",18,{"inputs":[{"name":"object"}],"output":{"name":"result"}}],[8,"ObjectExt","","",null,null],[11,"try_clone","","",19,{"inputs":[{"name":"objectext"}],"output":{"name":"result"}}],[11,"from_handle","","",19,{"inputs":[{"name":"handle"}],"output":{"name":"self"}}],[11,"into_handle","","",19,{"inputs":[{"name":"objectext"}],"output":{"name":"handle"}}],[11,"close","","",19,{"inputs":[{"name":"objectext"}],"output":{"name":"result"}}],[8,"Readable","","",null,null],[11,"read","","",20,null],[11,"read_overlapped","","",20,null],[8,"Writable","","",null,null],[11,"write","","",21,null],[11,"write_overlapped","","",21,null],[11,"flush","","",21,{"inputs":[{"name":"writable"}],"output":{"name":"result"}}],[0,"overlapped","minwin","",null,null],[3,"Overlapped","minwin::overlapped","",null,null],[11,"fmt","","",22,{"inputs":[{"name":"overlapped"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",22,{"inputs":[],"output":{"name":"overlapped"}}],[11,"get","","",22,{"inputs":[{"name":"overlapped"}],"output":{"name":"overlapped"}}],[11,"set_offset","","",22,{"inputs":[{"name":"overlapped"},{"name":"u64"}],"output":null}],[11,"offset","","",22,{"inputs":[{"name":"overlapped"}],"output":{"name":"u64"}}],[11,"set_event","","",22,{"inputs":[{"name":"overlapped"},{"name":"option"}],"output":null}],[11,"event","","",22,{"inputs":[{"name":"overlapped"}],"output":{"name":"option"}}],[11,"default","","",22,{"inputs":[],"output":{"name":"overlapped"}}],[0,"pipe","minwin","",null,null],[3,"PipeBuilder","minwin::pipe","",null,null],[3,"ReadPipe","","",null,null],[3,"WritePipe","","",null,null],[5,"create_pipe","","",null,{"inputs":[],"output":{"name":"result"}}],[11,"new","","",23,{"inputs":[],"output":{"name":"pipebuilder"}}],[11,"size","","",23,{"inputs":[{"name":"pipebuilder"},{"name":"u32"}],"output":{"name":"pipebuilder"}}],[11,"create","","",23,{"inputs":[{"name":"pipebuilder"}],"output":{"name":"result"}}],[11,"fmt","","",24,{"inputs":[{"name":"readpipe"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_raw_handle","","",24,{"inputs":[{"name":"rawhandle"}],"output":{"name":"readpipe"}}],[11,"as_raw_handle","","",24,{"inputs":[{"name":"readpipe"}],"output":{"name":"rawhandle"}}],[11,"into_raw_handle","","",24,{"inputs":[{"name":"readpipe"}],"output":{"name":"rawhandle"}}],[11,"read","","",24,null],[11,"fmt","","",25,{"inputs":[{"name":"writepipe"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_raw_handle","","",25,{"inputs":[{"name":"rawhandle"}],"output":{"name":"writepipe"}}],[11,"as_raw_handle","","",25,{"inputs":[{"name":"writepipe"}],"output":{"name":"rawhandle"}}],[11,"into_raw_handle","","",25,{"inputs":[{"name":"writepipe"}],"output":{"name":"rawhandle"}}],[11,"write","","",25,null],[11,"flush","","",25,{"inputs":[{"name":"writepipe"}],"output":{"name":"result"}}],[0,"process","minwin","",null,null],[3,"Process","minwin::process","",null,null],[11,"fmt","","",26,{"inputs":[{"name":"process"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_raw_handle","","",26,{"inputs":[{"name":"rawhandle"}],"output":{"name":"process"}}],[11,"as_raw_handle","","",26,{"inputs":[{"name":"process"}],"output":{"name":"rawhandle"}}],[11,"into_raw_handle","","",26,{"inputs":[{"name":"process"}],"output":{"name":"rawhandle"}}],[0,"string","minwin","",null,null],[3,"NulError","minwin::string","",null,null],[5,"wide_to_ansi","","",null,{"inputs":[{"name":"s"}],"output":{"name":"result"}}],[5,"wide_to_ansi_null","","",null,{"inputs":[{"name":"s"}],"output":{"name":"result"}}],[5,"ansi_to_wide","","",null,{"inputs":[{"name":"s"}],"output":{"name":"result"}}],[5,"ansi_to_wide_null","","",null,{"inputs":[{"name":"s"}],"output":{"name":"result"}}],[6,"WideString","","",null,null],[6,"WideStr","","",null,null],[6,"AnsiString","","",null,null],[6,"AnsiStr","","",null,null],[8,"ToWideString","","",null,null],[10,"to_wide_string","","",27,{"inputs":[{"name":"towidestring"}],"output":{"name":"widestring"}}],[11,"to_wide_string_null","","",27,{"inputs":[{"name":"towidestring"}],"output":{"name":"result"}}],[8,"ToAnsiString","","",null,null],[10,"to_ansi_string","","",28,{"inputs":[{"name":"toansistring"}],"output":{"name":"result"}}],[10,"to_ansi_string_null","","",28,{"inputs":[{"name":"toansistring"}],"output":{"name":"result"}}],[11,"eq","","",29,{"inputs":[{"name":"nulerror"},{"name":"nulerror"}],"output":{"name":"bool"}}],[11,"ne","","",29,{"inputs":[{"name":"nulerror"},{"name":"nulerror"}],"output":{"name":"bool"}}],[11,"clone","","",29,{"inputs":[{"name":"nulerror"}],"output":{"name":"nulerror"}}],[11,"fmt","","",29,{"inputs":[{"name":"nulerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"nul_position","","",29,{"inputs":[{"name":"nulerror"}],"output":{"name":"usize"}}],[11,"into_vec","","",29,{"inputs":[{"name":"nulerror"}],"output":{"name":"vec"}}],[11,"description","","",29,{"inputs":[{"name":"nulerror"}],"output":{"name":"str"}}],[11,"fmt","","",29,{"inputs":[{"name":"nulerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","std::io::error","",30,{"inputs":[{"name":"nulerror"}],"output":{"name":"error"}}],[0,"sync","minwin","",null,null],[3,"EventBuilder","minwin::sync","",null,null],[3,"Event","","",null,null],[3,"MutexBuilder","","",null,null],[3,"Mutex","","",null,null],[3,"MutexGuard","","",null,null],[3,"SemaphoreBuilder","","",null,null],[3,"Semaphore","","",null,null],[3,"SemaphoreGuard","","",null,null],[3,"WaitableTimerBuilder","","",null,null],[3,"WaitableTimer","","",null,null],[4,"EventAccess","","",null,null],[13,"ModifyState","","",31,null],[4,"MutexAccess","","",null,null],[13,"ModifyState","","",32,null],[4,"LockError","","",null,null],[13,"Abandoned","","",33,null],[13,"Io","","",33,null],[4,"TryLockError","","",null,null],[13,"Abandoned","","",34,null],[13,"WouldBlock","","",34,null],[13,"Io","","",34,null],[4,"SemaphoreAccess","","",null,null],[13,"ModifyState","","",35,null],[4,"TryAcquireError","","",null,null],[13,"WouldBlock","","",36,null],[13,"Io","","",36,null],[4,"DueTime","","",null,null],[13,"Relative","","",37,null],[13,"Absolute","","",37,null],[4,"WaitableTimerAccess","","",null,null],[13,"ModifyState","","",38,null],[13,"QueryState","","",38,null],[11,"new","","",39,{"inputs":[],"output":{"name":"eventbuilder"}}],[11,"initial_state","","",39,{"inputs":[{"name":"eventbuilder"},{"name":"bool"}],"output":{"name":"eventbuilder"}}],[11,"manual_reset","","",39,{"inputs":[{"name":"eventbuilder"},{"name":"bool"}],"output":{"name":"eventbuilder"}}],[11,"desired_access","","",39,{"inputs":[{"name":"eventbuilder"},{"name":"a"}],"output":{"name":"eventbuilder"}}],[11,"fmt","","",40,{"inputs":[{"name":"event"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_raw_handle","","",40,{"inputs":[{"name":"rawhandle"}],"output":{"name":"event"}}],[11,"as_raw_handle","","",40,{"inputs":[{"name":"event"}],"output":{"name":"rawhandle"}}],[11,"into_raw_handle","","",40,{"inputs":[{"name":"event"}],"output":{"name":"rawhandle"}}],[11,"eq","","",31,{"inputs":[{"name":"eventaccess"},{"name":"eventaccess"}],"output":{"name":"bool"}}],[11,"clone","","",31,{"inputs":[{"name":"eventaccess"}],"output":{"name":"eventaccess"}}],[11,"fmt","","",31,{"inputs":[{"name":"eventaccess"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"mask","","",31,{"inputs":[{"name":"eventaccess"}],"output":{"name":"u32"}}],[11,"all","","",31,{"inputs":[],"output":{"name":"customaccess"}}],[11,"bitor","","",31,{"inputs":[{"name":"eventaccess"},{"name":"t"}],"output":{"name":"customaccess"}}],[11,"create","","",40,{"inputs":[],"output":{"name":"result"}}],[11,"create_named","","",40,{"inputs":[{"name":"n"}],"output":{"name":"createnamedresult"}}],[11,"set","","",40,{"inputs":[{"name":"event"}],"output":{"name":"result"}}],[11,"reset","","",40,{"inputs":[{"name":"event"}],"output":{"name":"result"}}],[11,"new","","",41,{"inputs":[],"output":{"name":"mutexbuilder"}}],[11,"initial_owner","","",41,{"inputs":[{"name":"mutexbuilder"},{"name":"bool"}],"output":{"name":"mutexbuilder"}}],[11,"desired_access","","",41,{"inputs":[{"name":"mutexbuilder"},{"name":"a"}],"output":{"name":"mutexbuilder"}}],[11,"fmt","","",42,{"inputs":[{"name":"mutex"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_raw_handle","","",42,{"inputs":[{"name":"rawhandle"}],"output":{"name":"mutex"}}],[11,"as_raw_handle","","",42,{"inputs":[{"name":"mutex"}],"output":{"name":"rawhandle"}}],[11,"into_raw_handle","","",42,{"inputs":[{"name":"mutex"}],"output":{"name":"rawhandle"}}],[11,"eq","","",32,{"inputs":[{"name":"mutexaccess"},{"name":"mutexaccess"}],"output":{"name":"bool"}}],[11,"clone","","",32,{"inputs":[{"name":"mutexaccess"}],"output":{"name":"mutexaccess"}}],[11,"fmt","","",32,{"inputs":[{"name":"mutexaccess"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"mask","","",32,{"inputs":[{"name":"mutexaccess"}],"output":{"name":"u32"}}],[11,"all","","",32,{"inputs":[],"output":{"name":"customaccess"}}],[11,"bitor","","",32,{"inputs":[{"name":"mutexaccess"},{"name":"t"}],"output":{"name":"customaccess"}}],[11,"create","","",42,{"inputs":[],"output":{"name":"result"}}],[11,"create_named","","",42,{"inputs":[{"name":"n"}],"output":{"name":"createnamedresult"}}],[11,"lock","","",42,{"inputs":[{"name":"mutex"}],"output":{"name":"result"}}],[11,"try_lock","","",42,{"inputs":[{"name":"mutex"}],"output":{"name":"result"}}],[11,"release","","",42,{"inputs":[{"name":"mutex"}],"output":{"name":"result"}}],[11,"guard","","",42,{"inputs":[{"name":"mutex"}],"output":{"name":"mutexguard"}}],[11,"fmt","","",43,{"inputs":[{"name":"mutexguard"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"drop","","",43,{"inputs":[{"name":"mutexguard"}],"output":null}],[11,"fmt","","",33,{"inputs":[{"name":"lockerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",33,{"inputs":[{"name":"lockerror"}],"output":{"name":"str"}}],[11,"fmt","","",33,{"inputs":[{"name":"lockerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",34,{"inputs":[{"name":"trylockerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",34,{"inputs":[{"name":"trylockerror"}],"output":{"name":"str"}}],[11,"fmt","","",34,{"inputs":[{"name":"trylockerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",44,{"inputs":[{"name":"i32"}],"output":{"name":"semaphorebuilder"}}],[11,"initial_count","","",44,{"inputs":[{"name":"semaphorebuilder"},{"name":"i32"}],"output":{"name":"semaphorebuilder"}}],[11,"desired_access","","",44,{"inputs":[{"name":"semaphorebuilder"},{"name":"a"}],"output":{"name":"semaphorebuilder"}}],[11,"fmt","","",45,{"inputs":[{"name":"semaphore"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_raw_handle","","",45,{"inputs":[{"name":"rawhandle"}],"output":{"name":"semaphore"}}],[11,"as_raw_handle","","",45,{"inputs":[{"name":"semaphore"}],"output":{"name":"rawhandle"}}],[11,"into_raw_handle","","",45,{"inputs":[{"name":"semaphore"}],"output":{"name":"rawhandle"}}],[11,"eq","","",35,{"inputs":[{"name":"semaphoreaccess"},{"name":"semaphoreaccess"}],"output":{"name":"bool"}}],[11,"clone","","",35,{"inputs":[{"name":"semaphoreaccess"}],"output":{"name":"semaphoreaccess"}}],[11,"fmt","","",35,{"inputs":[{"name":"semaphoreaccess"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"mask","","",35,{"inputs":[{"name":"semaphoreaccess"}],"output":{"name":"u32"}}],[11,"all","","",35,{"inputs":[],"output":{"name":"customaccess"}}],[11,"bitor","","",35,{"inputs":[{"name":"semaphoreaccess"},{"name":"t"}],"output":{"name":"customaccess"}}],[11,"create","","",45,{"inputs":[{"name":"i32"}],"output":{"name":"result"}}],[11,"create_named","","",45,{"inputs":[{"name":"n"},{"name":"i32"}],"output":{"name":"createnamedresult"}}],[11,"acquire","","",45,{"inputs":[{"name":"semaphore"}],"output":{"name":"result"}}],[11,"try_acquire","","",45,{"inputs":[{"name":"semaphore"}],"output":{"name":"result"}}],[11,"release","","",45,{"inputs":[{"name":"semaphore"},{"name":"i32"}],"output":{"name":"result"}}],[11,"guard","","",45,{"inputs":[{"name":"semaphore"},{"name":"i32"}],"output":{"name":"semaphoreguard"}}],[11,"fmt","","",46,{"inputs":[{"name":"semaphoreguard"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"drop","","",46,{"inputs":[{"name":"semaphoreguard"}],"output":null}],[11,"fmt","","",36,{"inputs":[{"name":"tryacquireerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",36,{"inputs":[{"name":"tryacquireerror"}],"output":{"name":"str"}}],[11,"fmt","","",36,{"inputs":[{"name":"tryacquireerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",47,{"inputs":[],"output":{"name":"waitabletimerbuilder"}}],[11,"manual_reset","","",47,{"inputs":[{"name":"waitabletimerbuilder"},{"name":"bool"}],"output":{"name":"waitabletimerbuilder"}}],[11,"desired_access","","",47,{"inputs":[{"name":"waitabletimerbuilder"},{"name":"a"}],"output":{"name":"waitabletimerbuilder"}}],[11,"as_filetime","","",37,{"inputs":[{"name":"duetime"}],"output":{"name":"i64"}}],[11,"fmt","","",48,{"inputs":[{"name":"waitabletimer"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_raw_handle","","",48,{"inputs":[{"name":"rawhandle"}],"output":{"name":"waitabletimer"}}],[11,"as_raw_handle","","",48,{"inputs":[{"name":"waitabletimer"}],"output":{"name":"rawhandle"}}],[11,"into_raw_handle","","",48,{"inputs":[{"name":"waitabletimer"}],"output":{"name":"rawhandle"}}],[11,"eq","","",38,{"inputs":[{"name":"waitabletimeraccess"},{"name":"waitabletimeraccess"}],"output":{"name":"bool"}}],[11,"clone","","",38,{"inputs":[{"name":"waitabletimeraccess"}],"output":{"name":"waitabletimeraccess"}}],[11,"fmt","","",38,{"inputs":[{"name":"waitabletimeraccess"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"mask","","",38,{"inputs":[{"name":"waitabletimeraccess"}],"output":{"name":"u32"}}],[11,"all","","",38,{"inputs":[],"output":{"name":"customaccess"}}],[11,"bitor","","",38,{"inputs":[{"name":"waitabletimeraccess"},{"name":"t"}],"output":{"name":"customaccess"}}],[11,"create","","",48,{"inputs":[],"output":{"name":"result"}}],[11,"create_named","","",48,{"inputs":[{"name":"n"}],"output":{"name":"createnamedresult"}}],[11,"set","","",48,{"inputs":[{"name":"waitabletimer"},{"name":"duetime"},{"name":"option"}],"output":{"name":"result"}}],[11,"set_with_completion_routine","","",48,{"inputs":[{"name":"waitabletimer"},{"name":"duetime"},{"name":"option"},{"name":"f"}],"output":{"name":"result"}}],[11,"cancel","","",48,{"inputs":[{"name":"waitabletimer"}],"output":{"name":"result"}}],[0,"waitable","minwin","",null,null],[4,"WaitError","minwin::waitable","",null,null],[13,"Abandoned","","",49,null],[13,"Timeout","","",49,null],[13,"Io","","",49,null],[5,"wait_for_all","","",null,null],[5,"wait_for_any","","",null,null],[6,"WaitResult","","",null,null],[8,"Waitable","","",null,null],[11,"wait","","",50,{"inputs":[{"name":"waitable"}],"output":{"name":"waitresult"}}],[11,"wait_timeout","","",50,{"inputs":[{"name":"waitable"},{"name":"duration"}],"output":{"name":"waitresult"}}],[11,"fmt","","",49,{"inputs":[{"name":"waiterror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",49,{"inputs":[{"name":"waiterror"}],"output":{"name":"str"}}],[11,"fmt","","",49,{"inputs":[{"name":"waiterror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",49,{"inputs":[{"name":"error"}],"output":{"name":"waiterror"}}],[0,"prelude","minwin","",null,null]],"paths":[[3,"CustomAccess"],[4,"GenericAccess"],[4,"StandardAccess"],[8,"Access"],[8,"CombinableAccess"],[3,"MaximumAccess"],[3,"SystemSecurityAccess"],[3,"Handle"],[4,"CreateNamedError"],[8,"NamedBuilder"],[8,"NamedObject"],[4,"FileMappingAttribute"],[4,"FileMappingAccess"],[4,"FileViewAccess"],[3,"FileMappingBuilder"],[3,"FileMapping"],[3,"FileViewBuilder"],[3,"FileView"],[8,"Object"],[8,"ObjectExt"],[8,"Readable"],[8,"Writable"],[3,"Overlapped"],[3,"PipeBuilder"],[3,"ReadPipe"],[3,"WritePipe"],[3,"Process"],[8,"ToWideString"],[8,"ToAnsiString"],[3,"NulError"],[3,"Error"],[4,"EventAccess"],[4,"MutexAccess"],[4,"LockError"],[4,"TryLockError"],[4,"SemaphoreAccess"],[4,"TryAcquireError"],[4,"DueTime"],[4,"WaitableTimerAccess"],[3,"EventBuilder"],[3,"Event"],[3,"MutexBuilder"],[3,"Mutex"],[3,"MutexGuard"],[3,"SemaphoreBuilder"],[3,"Semaphore"],[3,"SemaphoreGuard"],[3,"WaitableTimerBuilder"],[3,"WaitableTimer"],[4,"WaitError"],[8,"Waitable"]]};
initSearch(searchIndex);
