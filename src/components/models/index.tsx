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
  perPage: number,
  requestUserDelete: Function,
  setCurrentUser: Function,
  requestGetUser: Function,
  castErrors: Function,
}


export interface UserListInterface {
  getUser: {
    userData: UserData[],
    startRange: number,
    endPage: number,
    perPage: number
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

//  CardTypes

export interface interfaceCard {
  getUser: {
    userData: UserData[],
  }
}

export interface CardProps {
  id: string,
  name: string,
  desc: string,
  surname: string,
  setIsDelete: Function,
  setCurrentUser: Function,
  castErrors: Function
}

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
    perPage: number
  }
}
