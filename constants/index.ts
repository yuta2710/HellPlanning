import UuidGenerator from 'uuid-wand';

export const navLinks = [
  {
    label: "Backlogs",
    route: "/",
    icon: "/assets/backlog.svg",
  },
  {
    label: "Boards",
    route: "/boards",
    icon: "/assets/board.svg",
  },
  {
    label: "Reports",
    route: "/reports",
    icon: "/assets/report.svg",
  },
  {
    label: "Inboxs",
    route: "/inboxs",
    icon: "/assets/inbox.svg",
  },
  {
    label: "Settings",
    route: "/settings",
    icon: "/assets/settings.svg",
  },
];

export const data = [
  {
    id: '1',
    Task: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent.',
    // Assigned_To: 'Beltran',
    // Assignee: 'Romona',
    // Status: 'To-do',
    // Priority: 'Low',
    Due_Date: '25-May-2020',
  },
  {
    id: '2',
    Task: 'Fix Styling',
    // Assigned_To: 'Dave',
    // Assignee: 'Romona',
    // Status: 'To-do',
    // Priority: 'Low',
    Due_Date: '26-May-2020',
  },
  {
    id: '3',
    Task: 'Handle Door Specs',
    // Assigned_To: 'Roman',
    // Assignee: 'Romona',
    // Status: 'To-do',
    // Priority: 'Low',
    Due_Date: '27-May-2020',
  },
  {
    id: '4',
    Task: 'Morbi',
    // Assigned_To: 'Gawen',
    // Assignee: 'Kai',
    // Status: 'Done',
    // Priority: 'High',
    Due_Date: '23-Aug-2020',
  },
  {
    id: '5',
    Task: 'Proin',
    // Assigned_To: 'Bondon',
    // Assignee: 'Antoinette',
    // Status: 'In Progress',
    // Priority: 'Medium',
    Due_Date: '05-Jan-2021',
  },
];

export const columnsFromBackend = {
  [UuidGenerator.v4()]: {
    title: 'To-do',
    items: data,
  },
  [UuidGenerator.v4()]: {
    title: 'In Progress',
    items: [],
  },
  [UuidGenerator.v4()]: {
    title: 'Done',
    items: [],
  },
};


export const mockAvatars: string[] = [
  'https://ywdslchnzrooawwvvdzw.supabase.co/storage/v1/object/public/My%20darling/IMG_7807.jpg',
  'https://ywdslchnzrooawwvvdzw.supabase.co/storage/v1/object/public/My%20darling/IMG_7809.jpg',
  'https://ywdslchnzrooawwvvdzw.supabase.co/storage/v1/object/public/My%20darling/IMG_7810.jpg',
  'https://ywdslchnzrooawwvvdzw.supabase.co/storage/v1/object/public/My%20darling/IMG_7811.png',
]

export const mockAvatars2: string[] = [
  'https://ywdslchnzrooawwvvdzw.supabase.co/storage/v1/object/public/My%20darling/IMG_7807.jpg',
  'https://ywdslchnzrooawwvvdzw.supabase.co/storage/v1/object/public/My%20darling/IMG_7811.png',
]