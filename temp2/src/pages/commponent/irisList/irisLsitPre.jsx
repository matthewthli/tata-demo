import { createSignal, For, onMount, Show } from "solid-js";
import ModalPopup from "../../../components/common/ModalPopup";
import AddIris from "../add/addIrisPre"

export default function IrisLsit() {
  const [isComplainModal, setComplainModal] = createSignal(false);
  const [title, setTitle] = createSignal("");
  setTitle('hello')

  const handleSubmit = () => {
    console.log(title())
    setComplainModal(false);
  };

  return (
    <div class="mt-8">
      <table class="ts acc ach">
        <thead>
          <tr>
            <th scope="col" class="asa atn auc avk awa awg axv cgi">id</th>
            <th scope="col" class="asa atn auc avk awa awg axv cgi">type</th>
            <th scope="col" class="asa atn auc avk awa awg axv cgi">summary</th>
            <th scope="col" class="asa atn auc avk awa awg axv cgi">status</th>
            <th scope="col" class="asa atn auc avk awa awg axv cgi">operate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="adm asc atn auc awa awe axv cgi">1</td>
            <td class="adm arf asc awa axr">Create Build Environment</td>
            <td class="adm arf asc awa axr">Create Build Environment</td>
            <td class="adm arf asc awa axr">close</td>
            <td class="adm arf asc awa axr" onClick={() => setComplainModal(true)}>view next</td>
          </tr>
          <tr>
            <td class="adm asc atn auc awa awe axv cgi">2</td>
            <td class="adm arf asc awa axr">Register Build VM</td>
            <td class="adm arf asc awa axr">Register Build VM</td>
            <td class="adm arf asc awa axr">approve</td>
            <td class="adm arf asc awa axr">view next</td>
          </tr>
          <tr>
            <td class="adm asc atn auc awa awe axv cgi">3</td>
            <td class="adm arf asc awa axr">Submission Source Code</td>
            <td class="adm arf asc awa axr">Submission Source Code</td>
            <td class="adm arf asc awa axr">reject</td>
            <td class="adm arf asc awa axr">view next</td>
          </tr>
        </tbody>
      </table>
      <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div class="flex flex-1 justify-between sm:hidden">
          <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
          <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p class="text-sm text-gray-700">
              {/* Showing
        <span class="font-medium">1</span>
        to
        <span class="font-medium">10</span>
        of
        <span class="font-medium">97</span>
        results */}
            </p>
          </div>
          <div>
            <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span class="sr-only">Previous</span>
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
              <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
              <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
              <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
              <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
              <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
              <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
              <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span class="sr-only">Next</span>
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
      
      <ModalPopup
            closeAction={() => setComplainModal(false)}
            isShow={isComplainModal()}
            title="Create post"
            styles={{ modelSize: "md:w-[28.750rem]" }}
            titleCss="text-skin-bold text-xl leading-6"
            titleWrapCss="pt-6"
            body={
              <div class="">
                <AddIris />
              </div>
            }
            isCloseIconDisable={true}
        />
    </div>
  )
}