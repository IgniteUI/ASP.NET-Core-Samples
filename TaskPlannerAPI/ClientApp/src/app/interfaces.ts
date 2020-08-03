export interface ITask {
    // id?: number;
    // issue?: string;
    // isActive?: boolean;
    priority?: string;
    milestone?: string;
    // description?: string;
    status?: string;
    // owner?: {
    //   id: number;
    //   name: string;
    //   sex: string;
    //   team: string;
    //   avatar: string;
    // };
    // created_by?: string;
    started_on?: Date;
    deadline?: Date;
    estimation?: number;
    hours_spent?: number;

    updatedAt?: Date;
    createdAt?: Date;
    closedAt?: Date;
    comments?: any;
    assignee?: ITeamMember;
    assignees?: ITeamMember[];
    labels?: ILabel[];
    body?: string;
    title?: string;
    number?: number;
    url?: string;
    id?: number;
}

export interface ITeamMember {
    id: number;
    avatarUrl: string;
    htmlUrl: string;
    team: string;
    login: string;
    url: string;
}

export interface ILabel {
  id: number;
  url: string;
  name: string;
  color: string;
  description: string;
  default: boolean;
}
