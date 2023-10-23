import LeftMenu from './commponent/leftMenu/menuLeft';
import AddIris from './commponent/add/addIris';
import IrisLsit from './commponent/irisList/irisLsit';
import { createSignal } from 'solid-js';



export default function NestedList() {
  const [activeItem, setActiveItem] = createSignal('');
  const [refreshFlag, setRefreshFlag] = createSignal(false);
  const [irisVisble, setIrisVisble] = createSignal(false);

  return (
    <div>
      <div class="flex mb-8">
        <LeftMenu setActiveItem={setActiveItem} setIrisVisble={setIrisVisble} />
        <span class="m-24"></span>
        <div>
        <AddIris activeItem={activeItem} setRefreshFlag={setRefreshFlag} irisVisble={irisVisble} setIrisVisble={setIrisVisble} />
        <IrisLsit refreshFlag ={refreshFlag}  setRefreshFlag={setRefreshFlag}/>
        </div>
        
      </div>
      <span class="mb-8"></span>
      
    </div>
  )
}