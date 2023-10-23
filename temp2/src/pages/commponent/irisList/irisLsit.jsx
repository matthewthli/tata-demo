import { createSignal, For, onMount, Show, mapArray, createResource, createEffect } from "solid-js";
import ModalPopup from "../../../components/common/ModalPopup";
import EditIris from "../add/editIris";
import axios from 'axios';
import PageNumbers from "../../../components/paginate/pageNumbers"; 


export default  function IrisLsit({refreshFlag,setRefreshFlag}) {
  const [isComplainModal, setComplainModal] = createSignal(false);
  const [irisId, setIrisId] = createSignal('');
  
  const [rows, setIrisList] = createSignal([]);
  const [currentPage, setCurrentPage] = createSignal(1);
  const pageSize = 5;
  const totalItems = 50;

  const [title, setTitle] = createSignal("");
  setTitle('hello')

  const handleEdit = (row) => {
    console.log(title())
    setIrisId(row.id);
    setComplainModal(true);
  };

  function getIrisList(){
    axios.get('http://localhost:3006/create')
    .then(function (response) {
      setIrisList(response.data)
      // handle success
      console.log(28);
      // console.log(irisList());
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }

  createEffect(() => {
    if(refreshFlag && refreshFlag()){
      getIrisList();
    }

    if(currentPage()){
      console.log('currentPage: ' + currentPage());
      getIrisList()
    }
    
  });

  getIrisList();

  // console.log('irisList:');
  
  // console.log(irisList);

  // let rows1 = [];
  // if(irisList && Array.isArray(irisList)){
  //   irisList.forEach((item) =>{
  //     rows.push(
  //       {
  //         id :item.id , type : item.type, summary : item.summary, status : item.status ,operate : 'view next'
  //       }
  //     )
  //   })
  // }
  // console.log(rows1)

  // const rows = [
  //   {id :"id", type : "Create Build Environment", summary : "Build VM1", status : "192.168.1.3",operate : 'view next'},
  //   {id :"id", type : "Create Build Environment", summary : "Build VM1", status : "192.168.1.3",operate : 'view next'},
  //   {id :"id", type : "Create Build Environment", summary : "Build VM1", status : "192.168.1.3",operate : 'view next'},
  //   {id :"id", type : "Create Build Environment", summary : "Build VM1", status : "192.168.1.3",operate : 'view next'}
  // ];

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
          {
            mapArray(()=>rows(),
            (row) =>(
              <tr>
                <td class="adm asc atn auc awa awe axv cgi">{row.id}</td>
                <td class="adm arf asc awa axr">{row.type}</td>
                <td class="adm arf asc awa axr">{row.summary}</td>
                <td class="adm arf asc awa axr">{row.status}</td>
                <td class="adm arf asc awa axr" onClick={[handleEdit, row]}>view next</td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <PageNumbers currentPage={currentPage()}
        setCurrentPage={setCurrentPage}
        pageSize={pageSize}
        totalItems={totalItems}
        limit={1}
        showStepOptions={true} />
      
      <ModalPopup
            closeAction={() => setComplainModal(false)}
            isShow={isComplainModal()}
            title="Edit "
            styles={{ modelSize: "md:w-[48.750rem]" }}
            titleCss="text-skin-bold text-xl leading-6"
            titleWrapCss="pt-6"
            body={
              <div class="">
                <EditIris  irisId={irisId} setComplainModal={setComplainModal} setRefreshFlag={setRefreshFlag}/>
              </div>
            }
            isCloseIconDisable={true}
        />
    </div>
  )
}