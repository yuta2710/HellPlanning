User:

UserID (Primary Key)
FirstName
LastName
Email
Password
Role (e.g., project manager, team member)

Team:

TeamID (Primary Key)
TeamName


Project:

ProjectID (Primary Key)
ProjectName
Description
StartDate
EndDate
ManagerID (Foreign Key referencing User table)


Task:

TaskID (Primary Key)
ProjectID (Foreign Key referencing Project table)
AssigneeID (Foreign Key referencing User table)
TaskName
Description
DueDate
Status (e.g., not started, in progress, completed)


TaskDependency:

DependencyID (Primary Key)
TaskID (Foreign Key referencing Task table)
DependsOnTaskID (Foreign Key referencing Task table)


Comment:

CommentID (Primary Key)
TaskID (Foreign Key referencing Task table)
UserID (Foreign Key referencing User table)
CommentText
CommentDate