import usersReducer, { setCurrentPage, setUsers } from '../redux/usersReducer';

const initialState = {
    users: [],
    currentPage: 1,
}

test('count of users should be set', () => {
    const action = setUsers(10)

    const newState = usersReducer(initialState, action)

    expect(newState.users).toBe(10);
})

test('number of page should be set', () => {
    const action = setCurrentPage(5)

    const newState = usersReducer(initialState, action)

    expect(newState.currentPage).toBe(5);
})
