import * as React from "react";

function MyComponent(props) {
  return (
    <div className="shadow-2xl bg-white flex flex-col items-stretch pb-10">
      <div className="justify-between items-stretch shadow-sm bg-white flex gap-5 px-20 py-3 max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <div className="items-stretch flex gap-1.5 my-auto px-px">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/30c9f85317bbbbde2643d4e9da4f0cfd391e00c5c4843cfbd3eedf19d185fcca?apiKey=2722471511c0474ba9bd8b3cf7004422&"
            className="aspect-[1.47] object-contain object-center w-[25px] shrink-0"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/314ede7a9d8295cf03e9dadfce12f228037d498286528b08a093a49e97c720d9?apiKey=2722471511c0474ba9bd8b3cf7004422&"
            className="aspect-[5.26] object-contain object-center w-[78px] fill-gray-800 shrink-0 self-start"
          />
        </div>
        <div className="justify-between items-stretch flex gap-5 pl-20 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
          <div className="items-stretch flex gap-4 text-xs text-neutral-600 font-medium whitespace-nowrap my-auto">
            <div className="text-center leading-[150%] grow">Home</div>
            <div className="text-center leading-[150%]">Features</div>
            <div className="text-center leading-[150%]">Community</div>
            <div className="leading-[150%]">Blog</div>
            <div className="leading-[150%] grow">Pricing</div>
          </div>
          <div className="justify-between items-stretch bg-green-500 flex gap-1.5 px-6 py-2.5 rounded-sm max-md:px-5">
            <div className="text-white text-center text-xs font-medium leading-4 grow whitespace-nowrap">
              Register Now
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e60d346516fbd9f7100930357f9cdb887a440c1b77a11299d4aa475afce30461?apiKey=2722471511c0474ba9bd8b3cf7004422&"
              className="aspect-square object-contain object-center w-[11px] justify-center items-center shrink-0 my-auto"
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-100 w-full mt-3 px-20 py-12 max-md:max-w-full max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[63%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col self-stretch my-auto max-md:max-w-full max-md:mt-10">
              <div className="text-green-500 text-5xl font-semibold leading-[53px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
                Lessons and insights{" "}
                <span className="text-green-500">from 8 years</span>
              </div>
              <div className="text-neutral-500 text-xs leading-4 mt-3 max-md:max-w-full">
                Where to grow your business as a photographer: site or social
                media?
              </div>
              <div className="text-white text-center text-xs font-medium leading-4 justify-center items-stretch bg-green-500 mt-6 px-6 py-2.5 rounded-sm self-start max-md:px-5">
                Register
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ce3f692c215e24ee1b725f5e6515a29d584608529e28867bb453bb9607c8326?apiKey=2722471511c0474ba9bd8b3cf7004422&"
              className="aspect-[0.96] object-contain object-center w-full self-stretch my-auto max-md:mt-10"
            />
          </div>
        </div>
      </div>
      <div className="items-center flex flex-col justify-center mt-3 px-16 max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[826px] flex-col items-stretch max-md:max-w-full">
          <div className="text-neutral-600 text-center text-2xl font-semibold leading-8 max-md:max-w-full">
            Our Clients
          </div>
          <div className="text-neutral-500 text-center text-xs leading-4 mt-1.5 max-md:max-w-full">
            We have been working with some Fortune 500+ clients
          </div>
          <div className="justify-between items-stretch flex gap-5 mt-3 pr-6 py-4 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/04879edc7a9be2ee9d60c2e574c35b61121c41321ca76c84989ab943185f0926?apiKey=2722471511c0474ba9bd8b3cf7004422&"
              className="aspect-square object-contain object-center w-[34px] justify-center items-center shrink-0"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6851d963bf747672232fcf6912e7649b66a3e1118c44c1112c54ed202d1c3317?apiKey=2722471511c0474ba9bd8b3cf7004422&"
              className="aspect-square object-contain object-center w-[34px] justify-center items-center shrink-0"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/93d5239e6a5a37ed044c5b8ca63cd43f1e44aada5b269ec1bb2ad32be8320bd4?apiKey=2722471511c0474ba9bd8b3cf7004422&"
              className="aspect-square object-contain object-center w-[34px] justify-center items-center shrink-0"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/23b4ddde75ea6e651c6d845bbf5c79989326af8fbb7a154069870e40c2091df5?apiKey=2722471511c0474ba9bd8b3cf7004422&"
              className="aspect-square object-contain object-center w-[34px] justify-center items-center shrink-0"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8af9d9d7dca5b4cf48c3b6c67c478f002a7c758980afcf552aa65ae45cc08f1a?apiKey=2722471511c0474ba9bd8b3cf7004422&"
              className="aspect-[0.97] object-contain object-center w-[33px] justify-center items-center shrink-0"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6c9787424e1c4b39f8907d031f2e652431514002a62a1545443c9693877b27c?apiKey=2722471511c0474ba9bd8b3cf7004422&"
              className="aspect-[0.97] object-contain object-center w-[33px] justify-center items-center shrink-0"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f68167179c7b7695aabf28b9da0910ed40e9eac641bea2b1ef7f7e41a1aee43?apiKey=2722471511c0474ba9bd8b3cf7004422&"
              className="aspect-[0.97] object-contain object-center w-[33px] justify-center items-center shrink-0"
            />
          </div>
        </div>
      </div>
      <div className="text-neutral-600 text-center text-2xl font-semibold leading-8 self-center w-[378px] ml-4 mt-14 max-md:mt-10">
        Manage your entire community in a single system
      </div>
      <div className="text-neutral-500 text-center text-xs leading-4 ml-8 mt-1.5 max-md:max-w-full">
        Who is Nextcent suitable for?
      </div>
      <div className="justify-between ml-8 mt-3 px-20 max-md:max-w-full max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <div className="items-stretch shadow-sm bg-white flex flex-col self-stretch text-center w-full my-auto px-3 py-4 rounded-md max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f0ab29feaf5741a3b98460d107865428853613255f6c74dfbe9488b17a0429f?apiKey=2722471511c0474ba9bd8b3cf7004422&"
                className="aspect-[1.15] object-contain object-center w-[45px] self-center"
              />
              <div className="text-neutral-600 text-xl font-bold leading-6 mt-3">
                Membership Organisations
              </div>
              <div className="text-neutral-500 text-xs leading-4 mt-1.5">
                Our membership management software provides full automation of
                membership renewals and payments
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch shadow-sm bg-white flex grow flex-col text-center w-full px-3 py-4 rounded-md max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c894f49dd2097e3feb828eab7ec806062c5f5c5b48a8c724e61bfc4d9b6c80d1?apiKey=2722471511c0474ba9bd8b3cf7004422&"
                className="aspect-[1.15] object-contain object-center w-[45px] self-center"
              />
              <div className="text-neutral-600 text-xl font-bold leading-6 mt-3">
                National Associations
              </div>
              <div className="text-neutral-500 text-xs leading-4 mt-1.5">
                Our membership management software provides full automation of
                membership renewals and payments
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch shadow-sm bg-white flex flex-col self-stretch w-full my-auto px-3 py-4 rounded-md max-md:mt-10">
              <div className="items-stretch flex flex-col px-3.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/88fd0962f2be33df4896333c83398b2dd440e71e3d226e4541f7fcb90a25a0a3?apiKey=2722471511c0474ba9bd8b3cf7004422&"
                  className="aspect-[1.18] object-contain object-center w-[46px] self-center"
                />
                <div className="text-neutral-600 text-center text-xl font-bold leading-6 mt-3">
                  Clubs And Groups
                </div>
              </div>
              <div className="text-neutral-500 text-center text-xs leading-4 mt-1.5">
                Our membership management software provides full automation of
                membership renewals and payments
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
            
      
     
  );
}









export default MyComponent;
