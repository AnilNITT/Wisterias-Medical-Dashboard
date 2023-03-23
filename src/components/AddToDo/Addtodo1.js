import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';

const Addtodo1 = () => {
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
                       
	
                       <div id="firstdiv">
                           <center> 
                           <h4>Choose a Category</h4><br/>
                           </center>
                             <div Style="display: flex; flex-wrap: wrap; justify-content: center; margin: 50px 0px 0px auto;">
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		    <label>
		        <input type="radio" name="radio1" onclick="show2()" style={{"display":"none"}}/>
			<img src="../../assets/img/cat-icon/1.png" alt="people" Style="background:#136D97"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Food And Drinks</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
			<img src="../../assets/img/cat-icon/2.png" alt="people" Style="background:#4E91C5"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Personal care</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/3.png" alt="people" Style="background:#76B2D7"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px; text-align: center; word-break: break-word;">  Personal Allowance</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/4.png" alt="people" Style="background:#B2D0E8"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px; text-align: center; word-break: break-word;"> House Work</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/5.png" alt="people" Style="background:#136D97"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Visit Log</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/6.png" alt="people" Style="background:#4E91C5"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Incident</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/7.png" alt="people" Style="background:#76B2D7"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Clinical Care</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/8.png" alt="people" Style="background:#B2D0E8"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Health Recordings</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/9.png" alt="people" Style="background:#136D97"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Memory Box</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/10.png" alt="people" Style="background:#4E91C5"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Activities</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show2();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/11.png" alt="people" Style="background:#B2D0E8"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Handover</span>
			</label>
		</div>
	 </div>  
                       </div>
                     </form>
                     
                        
                  </div>
               </div>
               </div>

               <div class="col-xl-12 col-md-12" Style="text-align: center;">
                    <button class="btn btn-primary mt-4 d-inline w-20" type="submit"><Link to="/addtodostep1">Next</Link></button>
                 </div>
         </div>
      </div>
    </main>
  );
};

export default Addtodo1;
