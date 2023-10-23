import { createSignal, For, onMount, Show, createEffect } from "solid-js";
import axios from 'axios';
/**
 * 1、查询内容，并展示
 * 2、可编辑，可提交
 * @param {*} param0 
 * @returns 
 */
export default function EditIris({id, setRefreshFlag, irisVisble, setIrisVisble, setComplainModal, irisId}) {
    const [irisDetail, setIrisDetail] = createSignal('');

    function getDetial(){
        debugger;
        axios.get('http://localhost:3006/detail', {
            "id": irisId(),
          })
          .then(function (response) {
            console.log(response.data);
            setIrisDetail(response.data);
            console.log(irisDetail)
          })
          .catch(function (error) {
            console.log(error);
          });         
    }


    // summary:  document.getElementById('summery').value,
    // projectName : document.getElementById('projectName').value,
    // department : document.getElementById('department').value,
    // buildVmIp :   document.getElementById('buildVmIp').value,
    // temmLeader : document.getElementById('temmLeader').value,
    // description : document.getElementById('description').value,
    // status : 'approve'

    const handleSubmit = () => {
        axios.post('http://localhost:3006/create', {
            // "id": irisDetail().id,
            "type": irisDetail.type,
            "summary":  document.getElementById('summery').value,
            "projectName" : document.getElementById('projectName').value,
            "department" : document.getElementById('department').value,
            "buildVmIp" :   document.getElementById('buildVmIp').value,
            "temmLeader" : document.getElementById('temmLeader').value,
            "description" : document.getElementById('description').value,
            "status" : 'approve'
          })
          .then(function (response) {
            console.log(response);
            setRefreshFlag(true);
            setComplainModal(false);
          })
          .catch(function (error) {
            console.log(error);
          });         
    };

    function showField(fieldName){
        if( fieldName === 'buildVmIp' && irisDetail() === 'Enable Developer Access'){
            return false
        }
        return true;
    }

    const cancelSubmit = () =>{
        setComplainModal(false);
    }

    getDetial();
    // 这里只执行一次
    onMount(() => {
        console.log("AddIris mounted");
    });
    // 这里每次更新props都会触发回调函数的执行
    createEffect(() => {
    });

    return (
        <div  class="bg-white mt-5">
            {/* <form action="" method="POST" class="mx-auto  max-w-xl sm:mt-10"> */}
                <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">{irisDetail()}</label>
                    <div class="sm:col-span-2">
                        <label for="summery" class="block text-sm font-semibold leading-6 text-gray-900">Summery</label>
                        <div class="mt-2.5">
                            <input type="text" value={irisDetail().summary ?? ""}
                            //  onInput={(e) => setIrisDetail((detial) => (detial.summary = e.currentTarget.value))}
                             name="summery" id="summery" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    {/* <Show when={showField('projectName')}> */}
                    <div class="sm:col-span-2">
                        <label for="projectName" class="block text-sm font-semibold leading-6 text-gray-900">Project Name</label>
                        <div class="mt-2.5">
                            <input type="text" value={irisDetail().projectName?? ""} name="projectName" id="projectName" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    {/* </Show> */}
                    {/* <Show when={showField('department')}> */}
                    <div class="sm:col-span-2">
                        <label for="department" class="block text-sm font-semibold leading-6 text-gray-900">Department</label>
                        <div class="mt-2.5">
                            <input type="text" name="department" value={irisDetail().department?? ""} id="department" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    {/* </Show> */}
                    {/* <Show when={showField('buildVmIp')}> */}
                        <div>
                            <label for="buildVmIp" class="block text-sm font-semibold leading-6 text-gray-900">Build VM IP</label>
                            <div class="mt-2.5">
                                <input type="text" name="buildVmIp" value={irisDetail().buildVmIp?? ""} id="buildVmIp" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    {/* </Show> */}
                    {/* <Show when={showField('temmLeader')}> */}
                    <div>
                        <label for="buildVmIp" class="block text-sm font-semibold leading-6 text-gray-900">Temm Leader</label>
                        <div class="mt-2.5">
                            <input type="text" name="temmLeader" id="temmLeader" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label for="buildVmIp" class="block text-sm font-semibold leading-6 text-gray-900">Assigned to</label>
                        <div class="mt-2.5">
                            <input type="text" name="assigned" id="assigned" autocomplete="organization" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    {/* <div>
                        <label for="temmLeader" class="block text-sm font-semibold leading-6 text-gray-900">Temm Leader</label>
                        <div class="relative mt-2.5">
                            <div class="absolute inset-y-0 left-0 flex items-center">
                                <label for="temmLeader" class="sr-only">temmLeader</label>
                                <select id="temmLeader" name="country" class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                                    <option></option>
                                    <option>Guo1</option>
                                    <option>chen</option>
                                    <option>liu</option>
                                </select>
                               
                            </div>
                        </div>
                    </div> */}
                    {/* </Show>             */}
                    {/* <div class="sm:col-span-2">
                        <div>
                            <label id="listbox-label" class="block text-sm font-medium leading-6 text-gray-900">Assigned to</label>
                            <div class="relative mt-2">
                                <button type="button" class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                    <span class="flex items-center">
                                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" />
                                        <span class="ml-3 block truncate">Tom Cook</span>
                                    </span>
                                    <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                        <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                </button>


                                <ul class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">

                                    <li class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9" id="listbox-option-0" role="option">
                                        <div class="flex items-center">
                                            <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" />
                                            <span class="font-normal ml-3 block truncate">Wade Cooper</span>
                                        </div>
                                        <span class="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                    <div class="sm:col-span-2">
                        <label for="description" class="block text-sm font-semibold leading-6 text-gray-900">Description</label>
                        <div class="mt-2.5">
                            <textarea name="description" id="description" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                        </div>
                    </div>
                </div>
                
                <div class="mt-10 flex">
                    <button  class="block w-1/4 rounded-md bg-indigo-600 px-1.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-24 ml-24" onclick={cancelSubmit}>Cancel</button>
                    <button class="block w-1/4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onclick={handleSubmit}>Submit</button>
                </div>
            {/* </form> */}
        </div>
    )
}