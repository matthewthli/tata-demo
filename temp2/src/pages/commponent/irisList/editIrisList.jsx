import { createSignal, For, onMount, Show } from "solid-js";
import ModalPopup from "../../../components/common/ModalPopup";


export default function Account() {
    const [isComplainModal, setComplainModal] = createSignal(false);

    return (
        <ModalPopup
            closeAction={() => setComplainModal(false)}
            isShow={isComplainModal()}
            title="Create post"
            styles={{ modelSize: "md:w-[38.750rem]" }}
            titleCss="text-skin-bold text-xl leading-6"
            titleWrapCss="pt-6"
            body={
                <div>
                    <div>
                        <div class="flex items-center mb-2">
                            <label class="w-[20%] text-gray-700 text-sm font-medium">Title</label>
                            <input
                                type="text"
                                class={`w-[80%] h-9 border border-skin-overlapMuted outline-none px-2 rounded-[0.1875rem] text-skin-bold bg-skin-white`}
                                value={title()}
                                onInput={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        {/* <div class="flex items-center mt-2">
                <label class="w-[20%] text-gray-700 text-sm font-medium">Medium</label>
                <input
                  type="text"
                  class={`w-[80%] h-9 border border-skin-overlapMuted outline-none px-2 rounded-[0.1875rem] text-skin-bold bg-skin-white`}
                  value={medium()}
                  onInput={(e) => setMedium(e.target.value)}
                />
              </div> */}
                        <div class="flex items-center mt-2">
                            <label class="w-[20%] text-gray-700 text-sm font-medium">Link</label>
                            <input
                                type="text"
                                class={`w-[80%] h-9 border border-skin-overlapMuted outline-none px-2 rounded-[0.1875rem] text-skin-bold bg-skin-white`}
                                value={link()}
                                onInput={(e) => setLink(e.target.value)}
                            />
                        </div>
                        <div class="flex items-center mt-2">
                            <label class="w-[20%] text-gray-700 text-sm font-medium">Desc</label>
                            <textarea
                                type=""
                                class={`w-[80%] h-20 border border-skin-overlapMuted outline-none px-2 rounded-[0.1875rem] text-skin-bold bg-skin-white`}
                                value={des()}
                                maxLength={100}
                                onInput={(e) => setDes(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class="flex justify-center mt-10">
                        <button
                            class="uppercase  mr-1 hover:bg-skin-royalblue hover:text-skin-white text-sm font-semibold border border-solid w-48 h-12 rounded text-skin-select border-skin-select"
                            onClick={() => setComplainModal(false)}
                        >
                            Cancel
                        </button>
                        <button
                            class="uppercase  hover:bg-skin-royalblue hover:text-skin-white text-sm font-semibold border border-solid w-48 h-12 rounded text-skin-select border-skin-select"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            }
            isCloseIconDisable={true}
        />
    )
}