import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';


const AddServiceUserEnquiry = () => {
  return (
    <main className="body-content">
        <Sidebar/>
        <div class="ms-content-wrapper">
            <div class="row">
               <div class="col-md-12">
                  <nav aria-label="breadcrumb">
                     <ol class="breadcrumb pl-0">
                        <li class="breadcrumb-item"><a href="#"><i class="material-icons">home</i> Home</a></li>
                      
                        <li class="breadcrumb-item active" aria-current="page">Add Service User Enquiry</li>
                     </ol>
                  </nav>
               </div>
               <div class="col-xl-12 col-md-12">
                  <div class="ms-panel">
                    <div class="ms-panel-header ms-panel-custome">
                      
                      
                     </div>
                     <div class="ms-panel-body">
                      
                     <form action="" class="form-horizontal" enctype="multipart/form-data" method="post">
		
		<div class="box-body">
			<div class="form-group row">
				<div class="col-sm-6">
					<label class="control-label">Date</label>
					<input class="form-control" name="date" type="date"/>
				</div>
				<div class="col-sm-6">
					<label class="control-label" for="inputLastName">Service user name</label>
						<input class="form-control" name="serviceusername" type="text"/>
				</div>
				<div class="col-sm-6">
					<label class="control-label">DOB</label>
				<input class="form-control" name="dob" type="date"/>
				</div>
				<div class="col-sm-6">
					<label class="control-label">Funding</label>
				<input class="form-control" name="funding" type="text"/>
				</div>
				<div class="col-sm-6">
					<label class="control-label">Created by</label>
				<input class="form-control" name="conductedby" type="text"/>
				</div>
				<div class="col-sm-6">
					<label class="control-label">Service user currently in</label>
				<select class="form-control">
				    <option>Select an option</option>
				    <option>Hospital</option>
				     <option>Care home</option>
				     <option>Own home</option>
				     <option>other</option>
				</select>
				</div>
				<div class="col-sm-6">
					<label class="control-label">Service user currently in (If select other)</label>
				<input class="form-control" name="other" type="text"/>
				</div>
				<div class="col-sm-6">
					<label class="control-label">Placement category</label>
				<input class="form-control" name="pc" type="text"/>
				</div>
				<div class="col-sm-6">
				<label class="control-label">Contact person detail</label>
				<input class="form-control" name="fueltype" type="text"/>
				</div>
			   <div class="col-sm-6">
				<label class="control-label">Relationship</label>
				{/* <!--<select class="form-control">-->
    <!--                                          <option>Select Relationship</option>-->
    <!--                                          <option>Father</option>-->
    <!--                                          <option>Mother</option>-->
    <!--                                          <option>Brother</option>-->
    <!--                                          <option>Sister</option>-->
    <!--                                          <option>Other</option>-->
    <!--               </select>-->
     */}
                <input type="text" class="form-control" name="relationship"/>
				</div>
			 {/* <!-- <div class="col-sm-6">-->
				<!--	<label class="control-label">Relationship (If select other)</label>-->
				<!--<input class="form-control"  name="other" type="text" >-->
				<!--</div>-->
				 */}
				<div class="col-sm-6">
					<label class="control-label"> Close case</label><br/>
			    <label class="checkbox-inline">
      <input type="checkbox" value="yes"/> Yes
    </label>&nbsp;&nbsp;&nbsp;&nbsp;
    <label class="checkbox-inline">
      <input type="checkbox" value="no"/> No
    </label>
				</div>
				<div class="col-sm-6">
				<label class="control-label">Review date</label>
				<input class="form-control" name="reviewdate" type="date"/>
				</div>
			</div>
			
		</div>
		<div class="box-footer">
			<button class="btn btn-primary" type="submit">Save</button>
		</div>
	</form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
    </main>
  )
}

export default AddServiceUserEnquiry