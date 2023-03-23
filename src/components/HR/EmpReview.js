import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';
import EmpNavbar from './EmpNavbar';


const EmpReview = () => {
  return (
    <main className="body-content">
        <Sidebar/>
        <div class="ms-content-wrapper">
        <div class="row">
           <EmpNavbar />
           <div class="col-md-12">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb pl-0">
                            <li class="breadcrumb-item">
                                <a href="#"><i class="material-icons">home</i> Home</a>
                            </li>
                            <li class="breadcrumb-item active">Review &amp; Performance - John Doe <a class="btn btn-primary" href="#" Style="float:right; margin-top:0px;">Create New</a></li>
                        </ol>
                    </nav>
                    <div class="ms-panel">
                      
                        <div class="ms-panel-body">
                            <div class="table-responsive">
                                <div id="data-table-2_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer"><div class="row"><div class="col-sm-12 col-md-6"><div class="dataTables_length" id="data-table-2_length"><label>Show <select name="data-table-2_length" aria-controls="data-table-2" class="custom-select custom-select-sm form-control form-control-sm"><option value="12">12</option><option value="25">25</option><option value="30">30</option><option value="-1">Todos</option></select> </label></div></div><div class="col-sm-12 col-md-6"><div id="data-table-2_filter" class="dataTables_filter"><label><input type="search" class="form-control form-control-sm" placeholder="Search Data..." aria-controls="data-table-2"/></label></div></div></div><div class="row"><div class="col-sm-12"><table class="table table-striped thead-primary w-100 dataTable no-footer" id="data-table-2" role="grid" aria-describedby="data-table-2_info">
                                 <thead>
                 <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Date: activate to sort column descending" Style="width: 30.3594px;">Date</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Conducted By: activate to sort column ascending" Style="width: 94.8906px;">Conducted By</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Area: activate to sort column ascending" Style="width: 31.1406px;">Area</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Results: activate to sort column ascending" Style="width: 50.5781px;">Results</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Next Review Date: activate to sort column ascending" Style="width: 116.719px;">Next Review Date</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Next New Review: activate to sort column ascending" Style="width: 115.172px;">Next New Review</th><th class="sorting" tabindex="0" aria-controls="data-table-2" rowspan="1" colspan="1" aria-label="Action: activate to sort column ascending" Style="width: 43.5625px;">Action</th></tr>
        </thead>
                                   <tbody>
                                    
                                   
                                <tr role="row" class="odd">
                                    <td class="sorting_1"></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>No Data Available</td>
                                    
                                    <td></td>
                                    <td></td>
                                   </tr></tbody>
                                </table></div></div><div class="row"><div class="col-sm-12 col-md-5"><div class="dataTables_info" id="data-table-2_info" role="status" aria-live="polite">Showing 1 to 1 of 1 entries</div></div><div class="col-sm-12 col-md-7"><div class="dataTables_paginate paging_simple_numbers" id="data-table-2_paginate"><ul class="pagination has-gap"><li class="paginate_button page-item previous disabled" id="data-table-2_previous"><a href="#" aria-controls="data-table-2" data-dt-idx="0" tabindex="0" class="page-link">Previous</a></li><li class="paginate_button page-item active"><a href="#" aria-controls="data-table-2" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item next disabled" id="data-table-2_next"><a href="#" aria-controls="data-table-2" data-dt-idx="2" tabindex="0" class="page-link">Next</a></li></ul></div></div></div></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
       </div>
    </main>
  )
}

export default EmpReview;