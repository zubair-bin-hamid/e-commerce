import Image from "next/image";
import Link from "next/link";

function Footer() {
  const shopping = {
    title: "shopping online",
    list: [
      {
        id: 1,
        name: "order status",
        url: "#",
      },
      {
        id: 2,
        name: "shipping and delivery",
        url: "#",
      },
      {
        id: 3,
        name: "returns",
        url: "#",
      },
      {
        id: 4,
        name: "payments options",
        url: "#",
      },
      {
        id: 5,
        name: "contact us",
        url: "#",
      },
    ],
  };

  const information = {
    title: "information",
    list: [
      {
        id: 1,
        name: "gift card",
        url: "#",
      },
      {
        id: 2,
        name: "find a store",
        url: "#",
      },
      {
        id: 3,
        name: "newsletter",
        url: "#",
      },
      {
        id: 4,
        name: "become a member",
        url: "#",
      },
      {
        id: 5,
        name: "site feedback",
        url: "#",
      },
    ],
  };

  return (
    <div className="flex justify-center items-center w-full h-full border-t-2 border-gray-200">
      <div className=" max-w-[1280px] w-[90%] flex flex-col ">
        <div className="flex md:flex-row flex-col border-b-2 border-gray-200 xl:py-28 md:py-14 py-12 pb-0 md:gap-0 gap-5">
          <div className="md:w-[40%] w-full">
            <div className="flex flex-col gap-2 md:w-[65%] w-full">
              <h3 className="capitalize font-bold mb-4 text-main-text-color">
                about
              </h3>
              <p className="first-letter:capitalize text-normal text-text-color">
                we diminution preference thoroughly if. Joy deal pain view much
                her time. Led young gay would now state. Pronounce we attention
                admitting
              </p>
              <div className="flex gap-6 mt-6">
                <div className="relative min-w-[16px] min-h-[16px] ">
                  <Image
                    fill
                    className="object-contain"
                    alt="call"
                    priority
                    src={"/Assets/facebook.png"}
                  />
                </div>
                <div className="relative min-w-[16px] min-h-[16px] ">
                  <Image
                    fill
                    className="object-contain"
                    alt="call"
                    priority
                    src={"/Assets/twitter.png"}
                  />
                </div>
                <div className="relative min-w-[16px] min-h-[16px] ">
                  <Image
                    fill
                    className="object-contain"
                    alt="call"
                    priority
                    src={"/Assets/instagram.png"}
                  />
                </div>
                <div className="relative min-w-[16px] min-h-[16px] ">
                  <Image
                    fill
                    className="object-contain"
                    alt="call"
                    priority
                    src={"/Assets/youtube.png"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-[60%] w-full flex md:flex-row flex-col justify-between capitalize">
            <div
              className="flex flex-col gap-2 md:border-t-0 border-t-2 border-gray-200 md:py-0  py-6"
            >
              <h3 className="font-bold mb-4 text-main-text-color">
                {shopping.title}
              </h3>
              {shopping.list.map(({ id, name, url }) => {
                return (
                  <Link
                    href={url}
                    key={id}
                    className="text-normal text-text-color"
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 md:border-t-0 border-t-2 border-gray-200 md:py-0  py-6">
              <h3 className="font-bold mb-4 text-main-text-color">
                {information.title}
              </h3>
              {information.list.map(({ id, name, url }) => {
                return (
                  <Link
                    href={url}
                    key={id}
                    className="text-normal text-text-color"
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 normal-case md:border-t-0 border-t-2 border-gray-200 md:py-0  py-6">
              <h3 className="font-bold mb-4 text-main-text-color">Contact</h3>
              <Link
                href="mailto:example@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-normal text-text-color"
              >
                store@mail.com
              </Link>
              <Link
                href="tel:+911234567899"
                target="_blank"
                className="text-normal text-text-color"
              >
                Tel +92 1234 5678 99
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-[1280px] w-[90%] flex justify-center items-center  text-text-color xl:py-10 md:py-6 py-4 font-semibold">
          © Copyrights.All Right Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
