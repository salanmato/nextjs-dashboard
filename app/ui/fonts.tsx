import { Inter, Lusitana } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const lusitana = Lusitana({
    subsets: ["latin"],
    display: "swap",
    weight: "400"
});

export { inter, lusitana };
