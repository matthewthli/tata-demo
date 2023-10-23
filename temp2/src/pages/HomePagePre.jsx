import LeftMenu from './commponent/leftMenu/menuLeftPre';
import AddIris from './commponent/add/addIrisPre';
import IrisLsit from './commponent/irisList/irisLsitPre';

export default function NestedList() {
  return (
    <div>
      <div class="flex mb-8">
        <LeftMenu />
        <span class="m-24"></span>
        <div>
        <AddIris />
        <IrisLsit />
        </div>
        
      </div>
      <span class="mb-8"></span>
      
    </div>
  )
}