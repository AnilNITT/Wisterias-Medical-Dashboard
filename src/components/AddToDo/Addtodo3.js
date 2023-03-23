import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';

const Addtodo3 = () => {
  return(
    <main className="body-content">
        <Sidebar/>
        <div class="ms-content-wrapper">
            <div class="row">

               <div class="col-md-12">
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb pl-0">
                        <li class="breadcrumb-item"><a href="#"><i class="material-icons">home</i> Home</a></li>
                      
                        <li class="breadcrumb-item active" aria-current="page">Create Task</li>
                     </ol>
                  </nav>
               </div>

               <div class="col-xl-12 col-md-12">
                  <div class="ms-panel">
                     
                     <div class="ms-panel-body">
                        <form class="needs-validation" novalidate="">
                       
	
                       
                       <div id="thirddiv" Style="display:block;">
                            <div class="ms-panel-header ms-panel-custome">
                        <h6 Style="text-transform:capitalize; font-size:20px;">Food &amp; Drinks / Meal</h6>
                       
                     </div>    
                           <div class="form-row" Style="margin-top:30px;">
                                <div class="offset-md-3 col-md-6">
                              <div class="row">
                               <div class="col-md-12 mb-3">
                                 <label for="validationCustom005">Title</label>
                                 <div class="input-group">
                                    <input type="text" class="form-control" value="Meal"/>

                                 </div>
                              </div>
                              <div class="col-md-12 mb-3">
                                 <label>Description</label>
                                 <div class="input-group">
                                   <textarea class="form-control" Style="height:100px;"></textarea>

                                 </div>
                              </div>
                              
                              <div class="col-md-12 mb-3">
                                  <Link to="/addtodostep3" class="btn btn-primary mt-4 d-inline w-20" id="next1">Next</Link>
                              </div>    
                             </div>
                             </div>
                         
                             
                           </div>
                        

                     </div></form>
                  </div>
               </div>
               </div>

               
         </div>
      </div>
    </main>
  );
};

export default Addtodo3;
