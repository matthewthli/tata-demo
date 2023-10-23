
import { createSignal, For, onMount, Show } from "solid-js";

export default function LeftMenu() {
    const [irisKey, setIrisKey] = createSignal(true);
    const [irisVisble, setIrisVisble] = createSignal(false);

    const handleClick = (e) => {
        let key = e.currentTarget.getElementsByTagName('div')[0].dataset.key;
        setIrisKey(irisKey);
        setIrisVisble(true)
        console.log(irisKey);
      };
    

    return (
        <div class="">
            <ul role="list" class="divide-y  divide-gray-100 rounded-md border border-gray-200">
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6" onClick={handleClick}>
                    <div class="ml-4 flex-shrink-0" data-key="01">
                        Dashbord
                    </div>
                </li>
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div class="ml-4 flex-shrink-0">
                        Enable Developer Access
                    </div>
                </li>
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div class="ml-4 flex-shrink-0">
                        Create Repository
                    </div>
                </li>
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div class="ml-4 flex-shrink-0">
                        Submission Source Code
                    </div>
                </li>
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div class="ml-4 flex-shrink-0">
                        Autobuild
                    </div>
                </li>
                <div>
                        <li class="flex items-center justify-between py-4 pl-8 pr-5 text-sm leading-6">
                            <div class="ml-4 flex-shrink-0">
                                Create Build Environment
                            </div>                         
                        </li>
                        <li class="flex items-center justify-between py-4 pl-8 pr-5 text-sm leading-6">
                            <div class="ml-4 flex-shrink-0">
                                Register Build VM
                            </div>                         
                        </li>
                        <li class="flex items-center justify-between py-4 pl-8 pr-5 text-sm leading-6">
                            <div class="ml-4 flex-shrink-0">
                                Start-Stop EC2
                            </div>                         
                        </li>
                        <li class="flex items-center justify-between py-4 pl-8 pr-5 text-sm leading-6">
                            <div class="ml-4 flex-shrink-0">
                                Build Binar
                            </div>                         
                        </li>
                        
                </div>
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div class="ml-4 flex-shrink-0">
                        Submission Source Binary
                    </div>
                </li>
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div class="ml-4 flex-shrink-0">
                        Publish Binary
                    </div>
                </li>
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div class="ml-4 flex-shrink-0">
                       Dissable Developer Access
                    </div>
                </li>
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div class="ml-4 flex-shrink-0">
                       Remove Repository
                    </div>
                </li>
            </ul>
        </div>
    )
}