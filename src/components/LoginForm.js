const LoginForm = () => {
    return (
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="myModalLabel">Login form</h4>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>

                    </div>
                <div class="modal-body">
                    <form>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                    <div class="input-group pb-modalreglog-input-group">
                                        <input type="email" class="form-control" id="email" placeholder="Email" />
                                        <span class="input-group-text"><i class="bi bi-person-fill"></i></span>
                                    </div>
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                    <div class="input-group pb-modalreglog-input-group">
                                        <input type="password" class="form-control" id="pws" placeholder="Password"/>
                                        <span class="input-group-text"><i class="bi bi-lock"></i></span>
                                    </div>
                            </div>
                    </form>

                </div>
                        <div class="modal-footer">

                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Log in</button>
                        </div>
            </div>
        </div>
    </div>
      );
}
 
export default LoginForm;