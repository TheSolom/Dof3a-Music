class UsersService {
    #usersModel;

    constructor(UsersModel) {
        this.#usersModel = UsersModel;
    }

    async createUser (data) {
        return await this.#usersModel.create(data);
    }

    async getUserById (id) {
        return await this.#usersModel.findById(id);
    }
}
export default UsersService;
