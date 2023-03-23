import React from 'react';
import {Link} from 'react-router-dom';
import Sidebar from '../Sidebar';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'


import "@fullcalendar/list/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";


const Calendar = () => {
  return(
    <>
    <main className="body-content">
        <Sidebar/>
        <div class="ms-content-wrapper">
      <div class="row">
         
          <div class="col-md-12">
          <nav aria-label="breadcrumb">
                    <ol class="breadcrumb pl-0">
                        <li class="breadcrumb-item">
                            <a href="#"><i class="material-icons">home</i> Home</a>
                        </li>
                        <li class="breadcrumb-item active"> </li>
                <li class="breadcrumb-item active">Calendar
                <a class="btn btn-primary" href="#" data-toggle="modal" data-target="#event-modal" Style="float:right; margin-top:-10px;
                margin-bottom:0.5rem;">New Event</a></li>
          </ol>
          </nav>

          <div className='row'>
          
            <div class="col-md-4">
                <div class="ms-panel">

                    <div class="ms-panel-body" Style="background: #1f4970;">

<main id="main_casl">
	<table class="calendar">
		<thead class="week-days-row">
			<tr>
				<td class="back-btn"><svg Style="pointer-events: none;" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.6855 5.43414L7.78135 10.3383L12.6855 15.2425" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
					</svg>
				</td>
				<td align="center" class="month-name" colspan="5">May 2022</td>
				<td class="next-btn">
					<svg Style="pointer-events: none;" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.81714 5.43414L12.7213 10.3383L7.81714 15.2425" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
					</svg>

				</td>
			</tr>
		<th class="week-name-item">Sun</th><th class="week-name-item">Mon</th><th class="week-name-item">Tue</th><th class="week-name-item">Wed</th><th class="week-name-item">Thu</th><th class="week-name-item">Fri</th><th class="week-name-item">Sat</th></thead>
		<tbody class="days-in-month-box"><tr class="week-body-row"><td class="week-day-item">1</td><td class="week-day-item">2</td><td class="week-day-item">3</td><td class="week-day-item">4</td><td class="week-day-item">5</td><td class="week-day-item">6</td><td class="week-day-item">7</td></tr><tr class="week-body-row"><td class="week-day-item">8</td><td class="week-day-item">9</td><td class="week-day-item">10</td><td class="week-day-item">11</td><td class="week-day-item">12</td><td class="week-day-item">13</td><td class="week-day-item">14</td></tr><tr class="week-body-row"><td class="week-day-item">15</td><td class="week-day-item">16</td><td class="week-day-item">17</td><td class="week-day-item">18</td><td class="week-day-item">19</td><td class="week-day-item">20</td><td class="week-day-item">21</td></tr><tr class="week-body-row"><td class="week-day-item">22</td><td class="week-day-item">23</td><td class="week-day-item" Style="background: white;">24</td><td class="week-day-item">25</td><td class="week-day-item">26</td><td class="week-day-item">27</td><td class="week-day-item">28</td></tr><tr class="week-body-row"><td class="week-day-item">29</td><td class="week-day-item">30</td><td class="week-day-item">31</td></tr><tr class="week-body-row"></tr></tbody>
	</table>
</main>
                      
             
                  
                </div>
            </div>
            
          
         
             <div class="ms-panel">

                    <div class="ms-panel-body">

                        <div class="card-body">
                        <h4 class="card-title">Todo list</h4>
                        <div class="add-items"> <input type="text" class="form-control todo-list-input" placeholder="What do you need to do today?"/> <button class="add btn btn-primary  todo-list-add-btn">Add</button> </div>
                        <div class="list-wrapper">
                            <ul class="d-flex flex-column-reverse todo-list">
                                <li>
                                    <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox"/> For what reason would it be advisable. <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                </li>
                                <li class="completed">
                                    <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox" checked=""/> For what reason would it be advisable for me to think. <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                </li>
                                <li>
                                    <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox"/> it be advisable for me to think about business content? <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                </li>
                                <li>
                                    <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox"/> Print Statements all <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                </li>
                                <li class="completed">
                                    <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox" checked=""/> Call Rampbo <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                </li>
                                <li>
                                    <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox"/> Print bills <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                                </li>
                            </ul>
                        </div>
                    </div>  
             
                  
                </div>
            </div>
            </div>
          
            <div class="col-md-8" >
          <FullCalendar 
                              initialView="dayGridMonth"
                              headerToolbar={{
                                right:"prev,next today",
                                center:"title",
                                left:"timeGridWeek,timeGridDay"
                                }}
                              // plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                              plugins={[dayGridPlugin, timeGridPlugin,  interactionPlugin]}
                              editable={true}
                              selectable={true}
                              selectMirror={true}
                              dayMaxEvents={true}
                              initialEvents={[
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-01-29T00:00:00+00:00","end":"2022-01-29T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57","url":"invoice"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-02-27T00:00:00+00:00","end":"2022-02-27T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-02-20T00:00:00+00:00","end":"2022-02-20T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57","url":"invoice"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-02-28T00:00:00+00:00","end":"2022-02-28T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57","url":"invoice"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-02-23T00:00:00+00:00","end":"2022-02-23T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57","url":"invoice"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-04-22T00:00:00+00:00","end":"2022-04-22T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-04-23T00:00:00+00:00","end":"2022-04-23T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-04-24T00:00:00+00:00","end":"2022-04-24T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-04-23T00:00:00+00:00","end":"2022-04-23T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-04-29T00:00:00+00:00","end":"2022-04-29T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57","url":"invoice"},
                                {"id":1,"title":"rach","allDay":false,"start":"2022-04-27T00:00:00+00:00","end":"2022-04-27T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57","url":"invoice"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-04-29T00:00:00+00:00","end":"2022-04-29T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-04-30T00:00:00+00:00","end":"2022-04-30T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-01T00:00:00+00:00","end":"2022-05-01T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-02T00:00:00+00:00","end":"2022-05-02T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-03T00:00:00+00:00","end":"2022-05-03T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57","url":"invoice"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-04T00:00:00+00:00","end":"2022-05-04T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice"},
                                {"id":1,"title":"lesley born","allDay":false,"start":"2022-05-05T00:00:00+00:00","end":"202-05-05T00:00:00+00:00","color":"#eaecfb","textColor":"#2643e9","url":"invoice"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-08T00:00:00+00:00","end":"2022-05-08T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-06T00:00:00+00:00","end":"2022-05-06T00:00:00+00:00","color":"#c0ffe4","textColor":"#108c57","url":"invoice"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-05-10T00:00:00+00:00","end":"2022-05-10T00:00:00+00:00","color":"#fdd1da","textColor":"#f80031","url":"invoice"},
                                {"id":1,"title":"Izhar Siddiqui","allDay":false,"start":"2022-11-19T00:00:00+00:00","end":"2022-11-19T00:00:00+00:00","color":"#eaecfb","textColor":"#2643e9","url":"invoice"}
                              ]}
          />
          </div>
          </div>
          </div>
                 
    
          <div class="new_modals">
            <div class="modal fade none-border" id="createtransfer">

                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title"><strong>Transfer</strong></h4>
                            <button aria-hidden="true" data-dismiss="modal" class="close" type="button">×</button>
                            <div class="modal_save">
                                <button class="btn btn-success " type="button" onclick="SavePatients()">Save</button>
                            </div>


                        </div>
                        <div class="row cal_m">
                            <div class="modal_contents">

                                <div role="form">
                                    <div class="row">
                                        <div class="col-sm-4 col-lg-4">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Ref Id <span class="man_fields1">*</span></label>
                                                <input type="text" class="form-control" maxlength="50" placeholder="Ref Id"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-4 col-lg-4">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Date <span class="man_fields1">*</span></label>
                                                <input type="date" class="form-control"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-4 col-lg-4">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Time <span class="man_fields1">*</span></label>
                                                <input type="time" class="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Created By <span class="man_fields1">*</span></label>
                                                <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlGndr">
                                                         <option value="">Select Staff</option>
                                       <option value="">John doe</option>
                                       <option value="">Raxon Mary</option>
                                        <option value="">Tokder kelly</option>
                                                    </select></span>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Person Incharge <span class="man_fields1">*</span></label>
                                                <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlGndr">
                                                         <option value="">Select Staff</option>
                                       <option value="">John doe</option>
                                       <option value="">Raxon Mary</option>
                                        <option value="">Tokder kelly</option>
                                                    </select></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">

                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Select Transfer Location</label>
                                                <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlMerital">
                                                        <option>Select Transfer Location</option>
                                                        <option>Location1 </option>
                                                         <option>Location2</option>
                                                          <option>Location3 </option>
                                                    </select></span>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Reason</label>
                                                <input type="text" class="form-control" placeholder="Reason"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Transportation</label>
                                                <input type="text" class="form-control" placeholder="Transportation"/>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 col-lg-6">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Equipments</label>
                                                <input type="text" class="form-control" placeholder="Equipments"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12 col-lg-12">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Notes</label>
                                                <textarea class="form-control" placeholder="Notes"></textarea>
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
      </div>
    
    
  </div>
    </main>
    <div class="modal fade" id="event-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" Style="display: none;" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title">Add/Edit Event</h4>
            </div>
            <div class="modal-body">
                <form name="save-event" method="post">
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Event Name</label>
                            <input type="text" name="title" class="form-control"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Date</label>
                            <input type="date" name="evtStart" class="form-control"/>
                        </div>
                    </div>
                     <div class="form-row">
                        <div class="form-group col-md-12">
                            <label>Select Color</label>
                          <select id="MySelect">
                                <option value="0" selected="">Select Color</option>
                           <option value="1" optioncolor="red">Red</option>
                           <option value="2" optioncolor="green">Green</option>
                           <option value="3" optioncolor="yellow">Yellow</option>
                           <option value="4" optioncolor="Orange">Orange</option>
                           <option value="5" optioncolor="Blue">Blue</option>
                           <option value="6" optioncolor="Indigo">Indigo</option>
                           <option value="7" optioncolor="Violet">Violet</option>
                         </select>
                        </div>

                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Time</label>
                            <input type="time" name="evtEnd" class="form-control"/>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Duration(Hours)</label>
                            <input type="number" name="evtEnd" class="form-control"/>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <label>Notes</label>
                            <textarea class="form-control"></textarea>
                        </div>

                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
</>
  );
};

export default Calendar;
