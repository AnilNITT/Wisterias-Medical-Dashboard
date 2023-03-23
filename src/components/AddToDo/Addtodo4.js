import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';

const Addtodo4 = () => {
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
                        
                     <div id="fourdiv" Style="display:block;">
                            <div class="ms-panel-header ms-panel-custome">
                        <h6 Style="text-transform:capitalize; font-size:20px;">Food &amp; Drinks / Meal</h6>
                       
                     </div>    
                           <div class="form-row" Style="margin-top:30px;">
                                <div class="offset-md-3 col-md-6">
                              <div class="row">
                               <div class="col-md-12 mb-3 text-center">
                                 <h6>When is a good time to start?</h6>
                                
                              </div>
                              <div class="col-md-6 mb-3">
                                 <label>Date</label>
                                  <div class="input-group">
                                    <input type="date" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                              <div class="col-md-6 mb-3">
                                 <label>Time</label>
                                  <div class="input-group">
                                    <input type="time" class="form-control" id="validationCustom003" required=""/>

                                 </div>
                              </div>
                                <div class="col-md-12 mb-3">
                               <div class="input-group">        
                              <label for="chkPassport">
                                  <input type="checkbox" id="recurring" value="recurring"/>
                                   Recurring?
                              </label>
                              </div>
                              </div>
                              <div class="col-md-12 mb-3" id="showrecurring" Style="display:none;">
                                <div class="input-group">
                                    <select class="form-control" id="validationCustom230" required="">
                                        <option value="">Daily</option>
                                       <option value="">Weekly</option>
                                       <option value="">Fornightly</option>
                                        <option value="">Monthly</option>
                                       
                                    </select>

                                 </div>
                                
                              </div>
                              
                              <div class="col-md-12 mb-3">
                              <Link to="/addtodostep4" class="btn btn-primary mt-4 d-inline w-20" id="next2">Next</Link>
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

export default Addtodo4;
