interface UserData {
  id?: any,
  name: string,
  surname: string,
  desc: string,
}

// UserListTypes

export interface UserListProps {
  setAction: Function,
  userData: UserData[]
  startRange: number,
  endPage: number,
  perPage: number,
  requestUserDelete: Function,
  requestGetUser: Function,
  castErrors: Function,
  setIsShowForm: Function
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

export interface PaginationInterface {
  getUser: {
    currentPage: number,
    pagesQuantity: number
  }
}

// CreatePeopleTypes
export interface CreatePeopleProps {
  requestUserCreate: Function,
  initialValues: {
    name: string,
    surname: string,
    desc: string,
  },
  setAction: Function,
  setIsShowForm: Function,
  requestUserPut: Function,
  setInitialValues: Function,
  currentUser?: number,
  serverErrors: {
    name: [],
    surname: [],
    desc: []
  },
  isShowForm: boolean,
  userData: UserData[],
  userSuccess: string,
  castErrors: Function
}

//  CardTypes

export interface InterfaceCard {
  getUser: {
    userData: UserData[],
  }
}

export interface CardProps {
  id: string,
  name: string,
  desc: string,
  surname: string,
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
