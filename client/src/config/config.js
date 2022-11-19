export const config = {
    roles: {
        'ADMIN': { write: true, read: true, create: true, delete: true, update: true, approve: true },
        'MANAGER': { write: true, read: false, create: true, delete: false, update: false, approve: false },
    },
    status: {
        'PENDING': ['PENDING', 'red'],
        'ACCEPTED': ['ACCEPTED', 'green'],
    }
}