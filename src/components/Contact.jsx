import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center my-5 h-full sm:h-[70vh] items-center">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around">
            <h1 className="text-4xl sm:text-5xl text-white">
              Contact <span className="primary-color">me</span>
            </h1>
            <p className="text-normal text-lg font-medium text-gray-400 mt-2">
              Send me an Email
            </p>
            <div className="flex items-center mt-2 text-gray-400">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                viewBox="0 0 256 256"
                style={{ enableBackground: "new 0 0 256 256" }}
                xmlSpace="preserve"
              >
                <path
                  className="st10"
                  d="M62.905 44.883c-.974 11.563-13.024 13.389-13.024 13.389 10.346.487 12.925 14.059 12.925 14.059.221-9.677 13.321-14.202 13.321-14.202-9.813-.587-13.222-13.246-13.222-13.246z"
                  fill="#d7e057"
                />
                <path
                  className="st0"
                  d="M76.217 56.633c-8.604-.515-11.832-12.025-11.863-12.142-.19-.702-.849-1.154-1.584-1.102a1.5 1.5 0 0 0-1.359 1.367c-.859 10.216-11.313 11.964-11.754 12.032a1.5 1.5 0 0 0 .155 2.982c9.027.426 11.498 12.719 11.521 12.843a1.502 1.502 0 0 0 1.599 1.213 1.5 1.5 0 0 0 1.375-1.46c.194-8.509 12.191-12.777 12.313-12.819a1.5 1.5 0 0 0-.403-2.914zM62.65 66.979c-1.357-3.131-3.708-6.908-7.586-8.877 2.931-1.404 6.408-3.913 8.201-8.272 1.551 3.07 4.2 6.88 8.334 8.723-3.006 1.638-6.922 4.404-8.949 8.426z"
                  fill="#3a312a"
                />
                <path
                  className="st10"
                  d="M41.206 61.864c-.688 8.179-9.212 9.471-9.212 9.471 7.318.344 9.142 9.944 9.142 9.944.156-6.845 9.422-10.045 9.422-10.045-6.941-.416-9.352-9.37-9.352-9.37z"
                  fill="#d7e057"
                />
                <path
                  className="st0"
                  d="M50.648 69.736c-5.767-.346-7.973-8.187-7.995-8.266a1.515 1.515 0 0 0-1.581-1.102 1.5 1.5 0 0 0-1.361 1.368c-.578 6.871-7.646 8.066-7.941 8.113a1.5 1.5 0 0 0 .155 2.982c6.035.284 7.724 8.645 7.739 8.727a1.5 1.5 0 0 0 2.974-.246c.13-5.709 8.331-8.633 8.411-8.661a1.5 1.5 0 0 0-.401-2.915zm-9.585 6.794c-.924-1.885-2.34-3.947-4.447-5.279 1.856-1.041 3.697-2.63 4.87-4.917 1.058 1.874 2.654 3.955 4.942 5.225-1.849 1.1-3.989 2.739-5.365 4.971z"
                  fill="#3a312a"
                />
                <path
                  className="st10"
                  d="M41.206 35.206c-.688 8.179-9.212 9.47-9.212 9.47 7.318.344 9.142 9.944 9.142 9.944.156-6.845 9.422-10.045 9.422-10.045-6.941-.415-9.352-9.369-9.352-9.369z"
                  fill="#d7e057"
                />
                <path
                  className="st0"
                  d="M50.648 43.078c-5.767-.345-7.973-8.186-7.995-8.265a1.516 1.516 0 0 0-1.581-1.102 1.5 1.5 0 0 0-1.361 1.368c-.578 6.871-7.646 8.066-7.941 8.113a1.5 1.5 0 0 0 .155 2.982c6.035.284 7.724 8.645 7.739 8.727a1.5 1.5 0 0 0 2.974-.246c.13-5.709 8.331-8.634 8.412-8.662a1.501 1.501 0 0 0-.402-2.915zm-9.585 6.795c-.924-1.885-2.34-3.947-4.447-5.279 1.856-1.041 3.697-2.63 4.87-4.917 1.058 1.874 2.655 3.955 4.942 5.224-1.85 1.1-3.989 2.74-5.365 4.972zM33.522 152.066a1.5 1.5 0 0 0-2.121 0l-14.225 14.225a1.5 1.5 0 1 0 2.122 2.121l14.225-14.225a1.5 1.5 0 0 0-.001-2.121zM50.373 170.421a1.5 1.5 0 0 0-2.121 0l-28.505 28.505a1.5 1.5 0 1 0 2.121 2.121l28.505-28.505a1.5 1.5 0 0 0 0-2.121zM67.977 188.023a1.5 1.5 0 0 0-2.121 0l-41.163 41.163a1.5 1.5 0 1 0 2.121 2.121l41.163-41.163a1.5 1.5 0 0 0 0-2.121zM85.579 205.627a1.5 1.5 0 0 0-2.121 0l-28.505 28.504a1.5 1.5 0 1 0 2.121 2.121l28.505-28.504a1.5 1.5 0 0 0 0-2.121zM103.934 222.478a1.5 1.5 0 0 0-2.121 0l-14.225 14.225a1.5 1.5 0 1 0 2.121 2.121l14.225-14.225a1.501 1.501 0 0 0 0-2.121z"
                  fill="#3a312a"
                />
                <path
                  className="st12"
                  d="M31.314 146.932c-.135 3.9 1.29 7.84 4.256 10.807l16.908 16.908 10.75 10.75 35.032 35.032a14.532 14.532 0 0 0 10.807 4.256l7.872-85.625-85.625 7.872z"
                  fill="#f16c7a"
                />
                <path
                  className="st0"
                  d="M118 138a1.532 1.532 0 0 0-1.198-.434l-85.625 7.872a1.5 1.5 0 0 0-1.361 1.442 16.128 16.128 0 0 0 4.694 11.919l16.908 16.908a1.5 1.5 0 1 0 2.121-2.121l-16.908-16.908a13.12 13.12 0 0 1-3.796-8.38l82.445-7.579-7.579 82.445a13.118 13.118 0 0 1-8.38-3.797l-35.032-35.031a1.5 1.5 0 1 0-2.121 2.121L97.2 221.489a16.126 16.126 0 0 0 11.919 4.695 1.5 1.5 0 0 0 1.442-1.361l7.872-85.625A1.5 1.5 0 0 0 118 138z"
                  fill="#3a312a"
                />
                <path
                  className="st12"
                  d="m233.498 85.192-62.69-62.69a14.532 14.532 0 0 0-10.807-4.256l-7.872 85.625 85.625-7.872c.135-3.9-1.289-7.84-4.256-10.807z"
                  fill="#f16c7a"
                />
                <path
                  className="st0"
                  d="m234.559 84.132-62.69-62.69a16.139 16.139 0 0 0-11.919-4.695 1.499 1.499 0 0 0-1.442 1.361l-7.872 85.626a1.5 1.5 0 0 0 1.633 1.631l85.626-7.872a1.5 1.5 0 0 0 1.361-1.442 16.136 16.136 0 0 0-4.697-11.919zm-80.771 18.08 7.579-82.446a13.123 13.123 0 0 1 8.38 3.797l62.69 62.69a13.116 13.116 0 0 1 3.797 8.38l-82.446 7.579z"
                  fill="#3a312a"
                />
                <path
                  className="st12"
                  d="m152.126 103.874-18.715 1.723c-7.451.685-14.061 7.295-14.746 14.746l-1.723 18.715-7.874 85.629a14.504 14.504 0 0 0 9.845-4.266l17.849-17.849 11.632-11.633 85.095-85.095a14.504 14.504 0 0 0 4.266-9.845l-85.629 7.875z"
                  fill="#f16c7a"
                />
                <path
                  className="st0"
                  d="M238.782 94.907a1.524 1.524 0 0 0-1.165-.401l-104.344 9.597c-8.131.749-15.354 7.973-16.102 16.103l-9.598 104.343a1.502 1.502 0 0 0 1.494 1.638l.044-.001a15.975 15.975 0 0 0 10.861-4.704L234.55 106.904a15.985 15.985 0 0 0 4.704-10.859 1.499 1.499 0 0 0-.472-1.138zm-6.353 9.876L117.852 219.359a13.007 13.007 0 0 1-7.125 3.664l9.433-102.543c.621-6.762 6.627-12.768 13.389-13.39l102.544-9.432a13.017 13.017 0 0 1-3.664 7.125z"
                  fill="#3a312a"
                />
                <path
                  className="st12"
                  d="m150.156 22.511-41.598 41.598-10.6 10.599-62.378 62.379a14.504 14.504 0 0 0-4.266 9.845l85.629-7.874 18.715-1.723c7.451-.685 14.061-7.295 14.746-14.746l1.723-18.715L160 18.245a14.504 14.504 0 0 0-9.844 4.266z"
                  fill="#f16c7a"
                />
                <path
                  className="st0"
                  d="M161.093 17.218c-.295-.313-.7-.517-1.138-.472a15.977 15.977 0 0 0-10.859 4.704l-41.599 41.599a1.5 1.5 0 1 0 2.121 2.121l41.599-41.599a13.01 13.01 0 0 1 7.124-3.664l-9.432 102.544c-.622 6.762-6.628 12.768-13.39 13.389l-102.543 9.433a13.012 13.012 0 0 1 3.663-7.125l62.379-62.379a1.5 1.5 0 1 0-2.121-2.121l-62.379 62.379a15.984 15.984 0 0 0-4.703 10.861 1.498 1.498 0 0 0 1.637 1.538l104.343-9.598c8.13-.747 15.354-7.971 16.103-16.102l9.597-104.344a1.505 1.505 0 0 0-.402-1.164z"
                  fill="#3a312a"
                />
                <path
                  className="st21"
                  d="m99.138 219.192.18.18c2.24 2.24 5.24 3.58 8.38 3.79l1.27-13.79-9.83 9.82zM236.238 94.632c-.21-3.14-1.56-6.14-3.8-8.38l-62.69-62.69a13.126 13.126 0 0 0-8.38-3.8l-1.2 13.1 52.33 52.33c2.97 2.97 4.39 6.91 4.26 10.81 0 .14-.01.28-.02.42l19.5-1.79zM216.218 99.492c-.65 2.32-1.9 4.52-3.73 6.35l-85.09 85.1-11.64 11.63-3.47 3.47-1.56 16.98c2.68-.43 5.16-1.7 7.12-3.66l29.49-29.48 85.09-85.1c1.96-1.96 3.23-4.44 3.66-7.12l-19.87 1.83zM151.218 23.572l-.17.17 6.35 6.35.94-10.18c-2.68.43-5.16 1.7-7.12 3.66z"
                  fill="#ce4e61"
                />
              </svg>
              <div className="ml-4 text-md tracking-wide w-40">
                Lotfi Bokhari
              </div>
            </div>
          </div>
          <form
            action=""
            method="post"
            className="p-6 flex flex-col justify-center max-w-[700px]"
          >
            <div className="flex flex-col">
              <input
                type="name"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div className="flex flex-col mt-2">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div className="flex flex-col mt-2">
              <textarea
                type="message"
                name="message"
                id="message"
                placeholder="Your message"
                className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <button
              type="submit"
              className="bg-primary-color text-white py-3 px-6 rounded-lg mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;