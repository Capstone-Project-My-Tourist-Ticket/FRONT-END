import CardTour from "@/components/CardTour";
import Layout from "@/components/Layout";

const DetailCity = () => {
  return (
    <Layout>
      <div className="w-full min-h-screen">
        <img
          src={`https://source.unsplash.com/1200x800/?tour,destination,sea`}
          className="w-full h-[500px] rounded-md"
        />
        <div className="flex flex-col space-y-6 container my-12">
          <p className="text-2xl font-semibold">Lampung</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga atque quis totam,
            incidunt corporis numquam vel velit quisquam deserunt, odit consequatur! Perferendis
            accusantium cupiditate quisquam dignissimos similique vel animi! Ea sed inventore
            pariatur nam accusantium explicabo asperiores, vero voluptatum perspiciatis velit
            officia aut, necessitatibus, et ratione error. Aspernatur sed asperiores eaque error quo
            repudiandae ut, sit eveniet cupiditate ad, quae officia saepe fugit laboriosam eum quas
            ex nostrum. Quis perspiciatis tempore amet minus doloribus repellendus tenetur harum,
            possimus iure, numquam dolorem voluptas fugiat labore reiciendis odit explicabo? In
            cupiditate veniam deleniti animi consequatur praesentium optio deserunt. Nemo nesciunt
            quas consequuntur?
          </p>
        </div>

        <div className="container grid grid-cols-4">
          {Array.from({ length: 8 }, (_, index) => (
            <CardTour key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DetailCity;
