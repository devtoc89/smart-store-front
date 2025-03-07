import type { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";

const products = [
  {
    id: 1,
    imageUrl: "https://sitem.ssgcdn.com/29/23/67/item/1000671672329_i1_300.jpg",
    brand: "MWM(엠더블유엠)",
    name: "Metal pleated dress",
    price: "847,700원",
  },
  {
    id: 2,
    imageUrl: "https://sitem.ssgcdn.com/29/23/67/item/1000671672329_i2_300.jpg",
    brand: "MWM(엠더블유엠)",
    name: "Belt pleated dress",
    price: "1,134,200원",
  },
  {
    id: 3,
    imageUrl: "https://sitem.ssgcdn.com/23/23/67/item/1000671672323_i1_300.jpg",
    brand: "MWM(엠더블유엠)",
    name: "Linen stitch minimal dress",
    price: "928,000원",
  },
  {
    id: 4,
    imageUrl: "https://sitem.ssgcdn.com/23/23/67/item/1000671672323_i2_300.jpg",
    brand: "MWM(엠더블유엠)",
    name: "Back point tuck dress",
    price: "1,018,000원",
  },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta = {
  title: "X.samples/pub/ssg-card",
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   variant: { control: "select", options: Object.keys(ButtonVariants.variant) },
  //   shape: { control: "select", options: Object.keys(ButtonVariants.shape) },
  //   size: { control: "select", options: Object.keys(ButtonVariants.size) },
  //   weight: { control: "select", options: Object.keys(ButtonVariants.weight) },
  //   children: { control: "text" },
  //   onClick: { action: "clicked" },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    // onClick: fn()
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: function ProductGrid() {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">고감도 프리미엄 편집샵</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col">
              <div className="relative pb-[150%] overflow-hidden mb-4">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="text-sm text-gray-500">{product.brand}</div>
              <div className="text-base font-medium mt-1">{product.name}</div>
              <div className="text-lg font-semibold mt-2">{product.price}</div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};
