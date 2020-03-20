import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }
  tasks = [
    {
        id: '1',
        description: 'Complete the wireframing of the complete product creation and and adding of user epics and user stories',
        sprintId: '1',
        sprintName: 'Sprint One',
        productId: '01',
        productName: 'IBM Agile System',
        storyPoints: '3',
        category : 'must',
        associatedColour: 'pink',
        dueDate: '1968-11-16T00:00:00',
        priority: 'high',
        assignee: [
            {
                id: '1',
                name: 'Naman Shrimali',
                avatar: ''
            }
        ]
    },
    {
        id: '2',
        description: 'Complete the wireframing for the kanban board, adding and removal of tasks, and tasks dialog box',
        sprintId: '1',
        sprintName: 'Sprint One',
        productId: '01',
        productName: 'Spry Product Management System',
        storyPoints: '3',
        associatedColour: 'white',
        dueDate: '1/4/2020',
        category : 'must',
        priority: 'high',
        assignee: [
            {
                id: '1',
                name: 'Naman Shrimali',
                avatar: ''
            }
        ]
    }
];
  pink = 'white';
//   homeDataOfUser = {
//     home :
//         {
//             product :
//             [
//                 {
//                     id : '1',
//                     name : 'Product Management System',
//                     sprint : [
//                         {
//                             id : '1',
//                             name : 'Sprint One',
//                             startedAt : '12/12/2012',
//                             duration : '2',
//                             tasks : [
//                                 {
//                                     id : '1',
//                                     name: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
//                                     complexity : '4',
//                                     associatedColour : 'pink',
//                                     createdAt : '12/12/2012',
//                                     dueDate : '24/12/2012',
//                                     priority : 'high',
//                                     associatedPeople : [
//                                         {
//                                             personId : '1',
//                                             personName : 'Naman Shrimali',
//                                             personAvatar : 'NS'
//                                         }
//                                     ],
//                                 }
//                             ]
//                         }
//                     ]
//                 },
//                 {
//                   id : '2',
//                   name : 'IBM Agile Product',
//                   sprint : [
//                       {
//                           id : '1',
//                           name : 'Sprint one',
//                           startedAt : '24/24/2024',
//                           duration : '2',
//                           tasks : [
//                               {
//                                   id : '1',
//                                   name: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.',
//                                   complexity : '4',
//                                   associatedColour : '#FF0266',
//                                   createdAt : '12/12/2012',
//                                   dueDate : '12/12/2012',
//                                   priority : 'medium',
//                                   associatedPeople : [
//                                       {
//                                           personId : '',
//                                           personName : '',
//                                           personAvatar : ''
//                                       }
//                                   ]
//                               }
//                           ]
//                       }
//                   ]
//               }
//             ]
//         }
// };
  ngOnInit(): void {
  }

}
