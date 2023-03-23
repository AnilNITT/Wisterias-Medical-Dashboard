import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';

const Addtodo2 = () => {
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
                        <div id="seconddiv" Style="display:block;">
                            <div class="ms-panel-header ms-panel-custome text-center">
                        <h6 Style="text-transform:capitalize; font-size:20px;">Food &amp; Drinks</h6>
                      
                     </div> 
                        <h6 Style="text-align:center; margin-top:20px;">Choose an Item</h6>
                            <div Style="display: flex; flex-wrap: wrap; justify-content: center; margin: 50px 0px 0px auto;">
                               
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		    <label>
		        <input type="radio" name="radio1" onclick="show3();" Style="display:none;"/>
			<img src="../../assets/img/cat-icon/Meal.png" alt="people" Style="background:#136D97"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Meal</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show3();" Style="display:none;"/>
			<img src="../../assets/img/cat-icon/Drink.png" alt="people" Style="background:#136D97"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px;  text-align: center; word-break: break-word;"> Drink</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show3();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/Snack.png" alt="people" Style="background:#136D97"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px; text-align: center; word-break: break-word;"> Snack</span>
			</label>
		</div>
		<div class="_15bsgg8" Style="cursor: pointer; margin: 0px 24px 24px; text-align:center">
		     <label>
		        <input type="radio" name="radio1" onclick="show3();" Style="display:none;"/>
		<img src="../../assets/img/cat-icon/Pudding.png" alt="people" Style="background:#136D97"/>
			<span Style="display: block; hyphens: auto; margin-top: 10px; text-align: center; word-break: break-word;"> Pudding</span>
			</label>
		</div>
		</div>
                      

                        </div>
                     </form>
                     
                        
                  </div>
               </div>
               </div>

               <div class="col-xl-12 col-md-12" Style="text-align: center;">
                    <button class="btn btn-primary mt-4 d-inline w-20" type="submit"><Link to="/addtodostep2">Next</Link></button>
               </div>
         </div>
      </div>
    </main>
  );
};

export default Addtodo2;
