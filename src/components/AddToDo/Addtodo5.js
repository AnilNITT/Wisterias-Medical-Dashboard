import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';

const Addtodo5 = () => {
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
                     <div id="fivediv" Style="display:block;">
                            <div class="ms-panel-header ms-panel-custome">
                        <h6 Style="text-transform:capitalize; font-size:20px;">Food &amp; Drinks / Meal</h6>
                       
                     </div>    
                           <div class="form-row" Style="margin-top:30px;">
                                <div class="offset-md-3 col-md-6">
                              <div class="row">
                               <div class="col-md-12 mb-3 text-center">
                                 <h6>Who's it for?</h6>
                                
                              </div>
                              <div class="col-md-6 mb-3">
                                 <div class="yesno"><input type="radio" name="radio" onclick="showservice();" value="" checked=""/> Service Users </div>
                              </div>
                              <div class="col-md-6 mb-3">
                                 <div class="yesno"><input type="radio" name="radio" onclick="showcarer();" value=""/> Carers </div>
                              </div>
                             
                              <div class="col-md-12 mb-3" id="serviceuserdiv">
                                <div class="form-group">
                                    <label>Assign Service User</label>
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option>Select Service User</option>
                                        <option value="">Michael Sullivan</option>
                                       <option value="">Linda Barrett</option>
                                       <option value="">Ronald Jacobs</option>
                                        
                                       
                                    </select>

                                 </div>
                                
                              </div>
                               <div class="col-md-12 mb-3" id="carerdiv" Style="display:none;">
                                <div class="from-group">
                                     <label>Assign Carer</label>
                                    <select class="form-control" id="validationCustom230" required="">
                                         <option>Select Carer</option>
                                        <option value="">John  Doe</option>
                                       <option value="">Andy Smith</option>
                                       <option value="">Jenifer</option>
           
                                       
                                    </select>

                                 </div>
                                
                              </div>
                              <div class="col-md-12 mb-3">
                               <label>Require a second signature?</label>
                                  </div>
                              <div class="col-md-6 mb-3">
                                 <div class="yesno"><input type="radio" name="radio" value=""/> Yes </div>
                              </div>
                              <div class="col-md-6 mb-3">
                                 <div class="yesno"><input type="radio" name="radio" value=""/> No </div>
                              </div>
                              
                              <div class="col-md-12 mb-3">
                               <label>Require carer to add a daily log after completing?</label>
                                  </div>
                              <div class="col-md-6 mb-3">
                                 <div class="yesno"><input type="radio" name="radio" value=""/> Yes </div>
                              </div>
                              <div class="col-md-6 mb-3">
                                 <div class="yesno"><input type="radio" name="radio" value=""/> No </div>
                              </div>
                              
                              <div class="col-md-12 mb-3">
                                   <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Add Task</button>
                              </div>    
                             </div>
                             </div>
                         
                             
                           </div>
                        

                     </div>
                        
                  </div>
               </div>
               </div>
         </div>
      </div>
    </main>
  );
};

export default Addtodo5;
