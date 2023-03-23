import React from 'react';
import {Link} from 'react-router-dom';

const EmpNavbar = () => {
  return(
    <div class="col-md-12">
    <div class="ms-panel" Style="margin-bottom:10px;">

<div class="ms-panel-body" Style="padding: 0px;">
  <div class="section_box1_content2">
         <div class="row">
             <div class="col-sm-12" Style="padding-left: 30px;">
                 <div class="tab_menus" Style="float:left;">
                     <ul>
                         <li><Link to="/employment">Employment</Link></li>
                         <li><Link to="/cpd">cpd</Link></li>
                         
                         <li><Link to="/emp_document">Documents</Link></li>
                         <li><Link to="/emp_training">training</Link></li>
                         <li><Link to="/emp_review">Reviews &amp; Performance</Link></li>
                         
                         <li><Link to="/emp_medicalvaccination">Medical &amp; Vaccination</Link></li>
                         <li><Link to="/emp_accidentincident">Accident &amp; Incident</Link></li>
                         <li><Link to="/workingavil">Working Availability</Link></li>
                     </ul>
                 </div>
             </div>
         </div>
     </div>
     </div>
     </div>
      <div class="ms-panel">

<div class="ms-panel-body" Style="padding: 0px;"> 
       <div class="section_box1_content2">
         <div class="row">
             <div class="col-sm-12" Style="padding-left: 30px;">
                 <div class="tab_menus" Style="float:left;">
                     <ul>
                         <li><a href="#">Employment history</a></li>
                         <li><a href="#">Holiday booking, (TBC)</a></li>
                         <li><Link to="/qualification">Qualification</Link></li>
                         <li><Link to="/workcerificate">Work Certificate</Link></li>
                         <li><Link to="/empcompliance">Employment compliance </Link></li>
                        
                     </ul>
                 </div>
             </div>
         </div>
     </div>
     </div>
     </div> 
     
     
      <div class="clearfix"></div>
</div>
  );
};

export default EmpNavbar;
