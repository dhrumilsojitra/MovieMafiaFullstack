// import React from 'react'

const AdminList = () => {
  return (
    <>
     {/* <!-- Main Content --> */}
     <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center space-x-4 bg-zinc-900 py-5">
            <h2 className="text-xl font-bold text-zinc-100">Admin Table</h2>

            {/* <% if (typeof error !=='undefined' && error) { %> */}
              <div className="flex items-center p-2 bg-red-500 text-white rounded-lg shadow-lg">
                <p className="text-base font-medium">
                  {/* <%= error %> */}
                </p>
              </div>
              {/* <% } %> */}
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-zinc-800 rounded-lg">
              <thead>
                <tr>
                  <th
                    className="px-6 py-3 border-b-2 border-zinc-700 text-left text-xs font-semibold text-zinc-100 uppercase tracking-wider">
                    Username
                  </th>
                  <th
                    className="px-6 py-3 border-b-2 border-zinc-700 text-left text-xs font-semibold text-zinc-100 uppercase tracking-wider">
                    Email
                  </th>
                  <th
                    className="px-6 py-3 border-b-2 border-zinc-700 text-left text-xs font-semibold text-zinc-100 uppercase tracking-wider">
                    Password
                  </th>

                  <th
                    className="px-6 py-3 border-b-2 border-zinc-700 text-left text-xs font-semibold text-zinc-100 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* <% if (users && users.length> 0) { %> <% users.htmlForEach(user=> { %> */}
                    <tr>
                      <td className="px-6 py-4 border-b border-zinc-700 text-zinc-100">
                        {/* <%= user.username %> */}
                      </td>

                      <td className="px-6 py-4 border-b border-zinc-700 text-zinc-400 overflow-hidden max-h-16">
                        {/* <%= user.email %> */}
                      </td>

                      <td className="px-6 py-4 border-b border-zinc-700 text-zinc-400 overflow-hidden max-h-16">
                        {/* <%= user.password %> */}
                      </td>
                      <td className="px-6 py-4 border-b border-zinc-700 text-zinc-100">
                        <div className="flex gap-3 items-center flex-wrap">
                          <form action="/admin/dashboard/deleteuser/<%= user._id %>" method="post">
                            <button type="submit" className="text-red-400 hover:text-red-300 font-semibold">
                              Delete
                            </button>
                          </form>
                        </div>
                      </td>
                    </tr>
                    {/* <% }); %> */}
                      {/* <% } else { %> */}
                        <tr>
                          <td colSpan="5" className="px-6 py-4 border-b border-zinc-700 text-center text-zinc-400">
                            No users available.
                          </td>
                        </tr>
                        {/* <% } %> */}
              </tbody>
            </table>
          </div>
        </div></>
  )
}

export default AdminList
