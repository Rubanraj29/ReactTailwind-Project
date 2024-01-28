import * as React from "react";

function MyComponent(props) {
  return (
    <div className="justify-center items-stretch flex flex-col pb-12">
      <div className="justify-between w-full px-20 max-md:max-w-full max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-2/5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/29da7c8e352a46f46f6206615a19c6233b0c12cb40b65c5ca902eb1e31a2de5b?apiKey=2722471511c0474ba9bd8b3cf7004422&"
              className="aspect-[1.02] object-contain object-center w-full justify-center items-center grow max-md:mt-9"
            />
          </div>
          <div className="flex flex-col items-stretch w-3/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col self-stretch my-auto pr-11 max-md:max-w-full max-md:mt-10 max-md:pr-5">
              <div className="text-neutral-600 text-2xl font-semibold leading-8">
                The unseen of spending three years at Pixelgrade
              </div>
              <div className="text-neutral-500 text-xs leading-4 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </div>
              <div className="text-white text-center text-xs font-medium leading-4 whitespace-nowrap justify-center items-stretch bg-green-500 mt-6 px-6 py-2.5 rounded-sm self-start max-md:px-5">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-between bg-slate-100 w-full mt-9 px-20 py-11 max-md:max-w-full max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col self-stretch my-auto max-md:mt-10">
              <div className="text-green-500 text-2xl font-semibold leading-8">
                Helping a local{" "}
                <span className="text-green-500">business reinvent itself</span>
              </div>
              <div className="text-zinc-900 text-xs leading-4 whitespace-nowrap mt-1.5">
                We reached here with our hard work and dedication
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col max-md:mt-10">
              <div className="items-stretch flex justify-between gap-5">
                <div className="items-stretch flex justify-between gap-3">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8783205336f3f6748d6c8d4b26150e86f4ea7dab2bdd1db57f052d7e090186d8?apiKey=2722471511c0474ba9bd8b3cf7004422&"
                    className="aspect-square object-contain object-center w-[34px] shrink-0 my-auto"
                  />
                  <div className="items-stretch flex flex-col whitespace-nowrap flex-1">
                    <div className="text-neutral-600 text-xl font-bold leading-6">
                      2,245,341
                    </div>
                    <div className="text-neutral-500 text-xs leading-4">
                      Members
                    </div>
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-3">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/46091511cdef5b1ba3fe35fa2b686ad0d14b2c27046cfaf3bb50e2c66112a363?apiKey=2722471511c0474ba9bd8b3cf7004422&"
                    className="aspect-[0.97] object-contain object-center w-[33px] shrink-0 my-auto"
                  />
                  <div className="items-stretch flex flex-col whitespace-nowrap flex-1">
                    <div className="text-neutral-600 text-xl font-bold leading-6">
                      46,328
                    </div>
                    <div className="text-neutral-500 text-xs leading-4">
                      Clubs
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-stretch flex justify-between gap-5 mt-7">
                <div className="items-stretch flex justify-between gap-3">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/81ce8e31f0a591e4498c15bcd3384306075015bf355d6fe1b9da7eb253a57112?apiKey=2722471511c0474ba9bd8b3cf7004422&"
                    className="aspect-[1.03] object-contain object-center w-[34px] shrink-0 my-auto"
                  />
                  <div className="items-stretch flex flex-col whitespace-nowrap flex-1">
                    <div className="text-neutral-600 text-xl font-bold leading-6">
                      828,867
                    </div>
                    <div className="text-neutral-500 text-xs leading-4">
                      Event Bookings
                    </div>
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-3">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2731126c6fbbc8aa3d05117ec518e8f90e6e2b0f56d3570d326dc29cf1546f4b?apiKey=2722471511c0474ba9bd8b3cf7004422&"
                    className="aspect-square object-contain object-center w-[33px] shrink-0 my-auto"
                  />
                  <div className="items-stretch flex flex-col whitespace-nowrap flex-1">
                    <div className="text-neutral-600 text-xl font-bold leading-6">
                      1,926,436
                    </div>
                    <div className="text-neutral-500 text-xs leading-4">
                      Payments
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-between w-full mt-8 px-20 max-md:max-w-full max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-2/5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/55657208090fa2a004dd2179c8d26422c29c96dc79482be3268d95ae5768073a?apiKey=2722471511c0474ba9bd8b3cf7004422&"
              className="aspect-[1.02] object-contain object-center w-full grow max-md:mt-9"
            />
          </div>
          <div className="flex flex-col items-stretch w-3/5 ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col self-stretch my-auto pr-11 max-md:max-w-full max-md:mt-10 max-md:pr-5">
              <div className="text-neutral-600 text-2xl font-semibold leading-8">
                How to design your site footer like we did
              </div>
              <div className="text-neutral-500 text-xs leading-4 mt-3">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </div>
              <div className="text-white text-center text-xs font-medium leading-4 whitespace-nowrap justify-center items-stretch bg-green-500 mt-6 px-6 py-2.5 rounded-sm self-start max-md:px-5">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 w-full mt-8 px-20 py-6 max-md:max-w-full max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[30%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4985ea9f9d7789996bb7c81f450dd2eb65969498d6f0febc10ee5d51356f10af?apiKey=2722471511c0474ba9bd8b3cf7004422&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4985ea9f9d7789996bb7c81f450dd2eb65969498d6f0febc10ee5d51356f10af?apiKey=2722471511c0474ba9bd8b3cf7004422&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4985ea9f9d7789996bb7c81f450dd2eb65969498d6f0febc10ee5d51356f10af?apiKey=2722471511c0474ba9bd8b3cf7004422&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4985ea9f9d7789996bb7c81f450dd2eb65969498d6f0febc10ee5d51356f10af?apiKey=2722471511c0474ba9bd8b3cf7004422&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4985ea9f9d7789996bb7c81f450dd2eb65969498d6f0febc10ee5d51356f10af?apiKey=2722471511c0474ba9bd8b3cf7004422&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4985ea9f9d7789996bb7c81f450dd2eb65969498d6f0febc10ee5d51356f10af?apiKey=2722471511c0474ba9bd8b3cf7004422&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4985ea9f9d7789996bb7c81f450dd2eb65969498d6f0febc10ee5d51356f10af?apiKey=2722471511c0474ba9bd8b3cf7004422&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4985ea9f9d7789996bb7c81f450dd2eb65969498d6f0febc10ee5d51356f10af?apiKey=2722471511c0474ba9bd8b3cf7004422&"
              className="aspect-square object-contain object-center w-full shadow-sm grow max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[70%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col text-xs max-md:max-w-full max-md:mt-10">
              <div className="text-neutral-500 font-medium leading-4 max-md:max-w-full">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </div>
              <div className="text-green-500 text-sm font-semibold leading-5 mt-3 max-md:max-w-full">
                Tim Smith
              </div>
              <div className="text-gray-400 leading-[150%] mt-1.5 max-md:max-w-full">
                British Dragon Boat Racing Association
              </div>
              <div className="items-stretch flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
                <div className="items-stretch flex justify-between gap-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/55f6ee240109d18cfe897f1a78d4115fc84234787962eb5bded5caeac952bc22?apiKey=2722471511c0474ba9bd8b3cf7004422&"
                    className="aspect-[1.03] object-contain object-center w-[34px] items-center shrink-0"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/139b7ff7a46925b617fa6e9073c44d56faaa9342452fe05ae9c2a4976e05ae82?apiKey=2722471511c0474ba9bd8b3cf7004422&"
                    className="aspect-[1.03] object-contain object-center w-[34px] items-center shrink-0"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bce6a3a19c8f763514362585c178577f2d13579c74c73a3c7cf6a8e9c5faa7f6?apiKey=2722471511c0474ba9bd8b3cf7004422&"
                    className="aspect-[1.03] object-contain object-center w-[34px] justify-end items-center shrink-0"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1cbce32d27f378371d2eb5e4629d0e9c9cc00039ab8405990cef4b99bb0a08a?apiKey=2722471511c0474ba9bd8b3cf7004422&"
                    className="aspect-[1.03] object-contain object-center w-[34px] justify-center items-center shrink-0"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d34c19e70c889aba0be15a81388b14a7a1015a28196df513a034e261225d7f91?apiKey=2722471511c0474ba9bd8b3cf7004422&"
                    className="aspect-[1.03] object-contain object-center w-[34px] items-center shrink-0"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/40807940e8fc42882ad75e66fe890f80afafff2e43288916652b29842ac6afa2?apiKey=2722471511c0474ba9bd8b3cf7004422&"
                    className="aspect-[1.03] object-contain object-center w-[34px] justify-center items-center shrink-0"
                  />
                </div>
                <div className="items-stretch flex gap-1.5 pl-1.5 py-1.5 self-start">
                  <div className="text-green-500 text-sm font-semibold leading-5 grow whitespace-nowrap">
                    Meet all customers
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2ef2f6e084e31e25659d8ed47c9f59527b83f76e9e5ff5283e8fa4b8596104d?apiKey=2722471511c0474ba9bd8b3cf7004422&"
                    className="aspect-[0.76] object-contain object-center w-[13px] justify-center items-center shrink-0 my-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center text-neutral-600 text-center text-2xl font-semibold leading-8 mt-8 max-md:max-w-full">
        Caring is the new marketing
      </div>
      <div className="text-neutral-500 text-center text-xs leading-4 self-center w-[438px] mt-1.5 max-md:max-w-full">
        The Nextcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.​
      </div>
    </div>
  );
}


export default MyComponent