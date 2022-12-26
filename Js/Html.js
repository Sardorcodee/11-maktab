sigUpp = `<form action="">
            <div class="mt-1 l position-relative">
                <label for="username" class="block text-base mb-2 indigo">Full name</label>
                <input type="text" id="username" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-5 focus:border-gray-600"placeholder="Enter name..." minlength="8" required/>
            </div>
            <!-- login -->
            <div class="mt-1 l position-relative">
                <label for="email" class="block text-base mb-2 indigo">Email</label>
                <input type="email" id="email" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-5 focus:border-gray-600"placeholder="Enter email..." required/>
            </div>
            <div class="mt-3 l position-relative">
                <label for="password" class="block text-base mb-2 indigo">Password</label>
                <input type="password" id="password" class="border fs-4  w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter password..." required/>
                <div class="eye fs-4 indigo position-absolute right-7 bottom-0.5 ">
                <i class="fa-solid fa-eye "></i>
                <i class="fa-solid fa-eye-slash d-none"></i>
            </div>
            </div>
            <div class="mt-3 flex justify-between items-center">
                <div>
                    <input class="form-check-input mt-2" type="checkbox" id="chek">
                    <label class="fs-5" for="chek">Remember me</label>
                  </div>
                  <div class="text-blue-500 fs-5">
                  <a href="#">Forgot Password?</a>

                </div>
            </div>
            <div class="mt-4">
                <button type="submit" class="btn border-2 indigobo indigob text-white drop-shadow-lg hover:drop-shadow py-2 w-full rounded-md hover:bg-transparent hover:bg-red-700 font-semibold"><i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login</button>
            </div>
            </form>`;
