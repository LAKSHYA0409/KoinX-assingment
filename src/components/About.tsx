import { FaArrowRight } from "react-icons/fa";

function About() {
  return (
    <div className="bg-white h-max rounded-lg my-5 lg:p-6 p-2">
      <div>
        <div className="text-2xl font-semibold text-[#0F1629]">
          About Bitcoin
        </div>
        <div className="mt-6 ">
          <div className="text-lg font-bold text-[#0B1426]">
            What is Bitcoin?
          </div>
          <div className="mt-2 pb-4 text-[#3E424A] font-medium border-b-2 border-[#C9CFDD]/40">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            nobis vero, error, est esse, enim sequi id accusantium iure quae
            maiores optio consectetur mollitia praesentium quisquam. Neque
            commodi rerum impedit.
          </div>
        </div>
        <div className="mt-2 border-b-2 border-[#C9CFDD]/40 pb-4">
          <div className="text-lg text-[#0B1426] font-bold">
            Lorem ipsum dolor sit amet
          </div>
          <div className="text-[#3E424A] font-medium mt-2">
            Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
            lobortis tristique pharetra. Diam id et lectus urna et tellus
            aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
            sed. Quam scelerisque fermentum sapien morbi sodales odio sed
            rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed.
            Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
          </div>

          <div className="mt-6 text-[#3E424A] font-medium">
            Diam praesent massa dapibus magna aliquam a dictumst volutpat.
            Egestas vitae pellentesque auctor amet. Nunc sagittis libero
            adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
            velit in senectus enim dui. Turpis tristique placerat interdum sed
            volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris
            faucibus diam mi nunc praesent massa turpis a. Integer dignissim
            augue viverra nulla et quis lobortis phasellus. Integer pellentesque
            enim convallis ultricies at.
          </div>
          <div className="mt-6 text-[#3E424A] font-medium">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </div>
        </div>

        <div className=" mt-2 py-2">
          <div className="text-[#0F1629] text-2xl font-semibold">
            Already Holding Bitcoin?
          </div>
          <div className="lg:flex border-b-2 border-[#C9CFDD]/40 pb-4">
            <div className="mt-4">
              <div className="lg:w-[400px] h-[151px] bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] rounded-lg flex">
                <div className="p-3">
                  <img
                    className="w-32 h-32 rounded-xl object-right object-cover"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <div className="items-center p-4 flex flex-col justify-center mr-10">
                  <div className=" text-white text-xl">
                    Calculate your Profits
                  </div>
                  <div className="bg-white px-3 py-2 rounded-lg mt-3 flex items-center">
                    Check Now
                    <FaArrowRight className="ml-2 font-normal" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 lg:ml-8">
              <div className="lg:w-[400px] h-[151px] bg-gradient-to-br from-[#FF9865] to-[#EF3031] rounded-lg flex">
                <div className="p-3">
                  <img
                    className="w-32 h-32 rounded-xl object-right object-cover"
                    src="https://plus.unsplash.com/premium_photo-1670249419881-b115ba63924a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className="items-center p-4 flex flex-col justify-center mr-10">
                  <div className=" text-white text-xl">
                    Calculate your tax liability
                  </div>
                  <div className="bg-white px-3 py-2 rounded-lg mt-3 flex items-center">
                    Check Now
                    <FaArrowRight className="ml-2 font-normal" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-2 text-[#3E424A] font-medium ">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </div>
      </div>
    </div>
  );
}

export default About;
