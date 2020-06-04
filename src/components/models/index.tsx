interface UserData {
  id?: any,
  name: string,
  surname: string,
  desc: string,
}

// UserListTypes

export interface UserListProps {
  userData: UserData[]
  startRange: number,
  endPage: number,
  requestUserDelete: Function,
  setCurrentUser: Function,
  requestGetUser: Function,
}


export interface UserListInterface {
  getUser: {
    userData: UserData[],
    startRange: number,
    endPage: number
  }
}

// PaginationTypes

export interface PaginationProps {
  currentPage: number,
  pagesQuantity: number,
  setCurrentPage: Function,
}

export interface paginationInterface {
  getUser: {
    currentPage: number,
    pagesQuantity: number
  }
}

// CreatePeopleTypes
export interface CreatePeopleProps {
  requestUserCreate: Function,
  requestUserPut: Function,
  currentUser: string,
  serverErrors: {
    name: [],
    surname: [],
    desc: []
  },
  userData: UserData[],
  userSuccess: string,
  castErrors: Function
}

export interface interfaceCreatePeople {
  getUser: {
    userErrors: {
      name: [],
      surname: [],
      desc: [],
    },
    currentUser: any,
    userData: UserData[],
    userPutSuccess: boolean,
    userLoading: boolean,
  }
}

//  CardTypes

export interface interfaceCard {
  getUser: {
    userData: UserData[],
  }
}

interface CardProps {
  id: string,
  name: string,
  desc: string,
  surname: string,
  setIsDelete: Function,
  setCurrentUser: Function,
}

export type CardTypes = CardProps;

// Modals

export interface ModalProps {
  getUser: {
    userData: {
      name: string,
      surname: string,
      desc: string
    },
    startRange: number,
    endPage: number,
  }
}
