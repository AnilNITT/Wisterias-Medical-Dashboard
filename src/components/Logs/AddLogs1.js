import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';

const AddLogs1 = () => {
  return(
    <main className="body-content">
        <Sidebar/>
        <div class="ms-content-wrapper">
            <div class="row">
               <div class="col-md-12">
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb pl-0">
                        <li class="breadcrumb-item"><a href="#"><i class="material-icons">home</i> Home</a></li>
                      
                        <li class="breadcrumb-item active" aria-current="page">Create Log</li>
                     </ol>
                  </nav>
               </div>
               <div class="col-xl-12 col-md-12">
                  <div class="ms-panel">
                     
                     <div class="ms-panel-body">
                        <form class="needs-validation" novalidate="">
                        <div id="firstdiv"> 
                       <center> 
                       <h4>Select Service Users</h4><br/>
                       
                       <select class="form-control" Style="width:50%">
          <option>Search by Location</option>
          <option>Location/Floor</option>
          <option>Room No</option>
      </select></center>
                         <div Style="display: flex; flex-wrap: wrap; justify-content: center; margin: 50px 0px 0px auto;">
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		    <label>
		        <input type="radio" name="radio1" onclick="show1();" Style="display:none;"/>
			<img src="../../assets/img/dashboard/patient-1.jpg" alt="people"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Michael Sullivan</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show1();" Style="display:none;"/>
			<img src="../../assets/img/dashboard/patient-2.jpg" alt="people"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Linda Barrett</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show1();" Style="display:none;"/>
		<img src="../../assets/img/dashboard/patient-3.jpg" alt="people"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px; text-align: center; word-break: break-word;">  Ronald Jacobs</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show1();" Style="display:none;"/>
		<img src="../../assets/img/dashboard/patient-4.jpg" alt="people"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px; text-align: center; word-break: break-word;"> Mark Hunter</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show1();" Style="display:none;"/>
		<img src="../../assets/img/dashboard/patient-5.jpg" alt="people"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Cristina Groves</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show1();" Style="display:none;"/>
		<img src="../../assets/img/dashboard/patient-6.jpg" alt="people"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Justin Parker</span>
			</label>
		</div>
	 </div>   
	                     </div> 
                        </form>
                  </div>
               </div>
            	</div>

			<div class="col-xl-12 col-md-12" Style="text-align: center;">
                    <button class="btn btn-primary mt-4 d-inline w-20" type="submit"><Link to="/addlogsstep1">Next</Link></button>
            </div>
         </div>
      </div>
    </main>
  );
  
};

export default AddLogs1;
