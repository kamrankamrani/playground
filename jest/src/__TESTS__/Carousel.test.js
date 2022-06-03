/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import Carousel from "../Carousel";

test("expect true hero image and thumbnail active class", async () => {
    const images = ["1.jpg", "2.jpg", "3.jpg"];
    const carousel = render(<Carousel images={images} />);
    const heroimg = await carousel.findByTestId("hero");
    expect(heroimg.src).toContain(images[0]);

    for (let i = 0; i < images.length; i++) {
        const thumb = await carousel.findByTestId(`thumbnail${i}`);
        thumb.click();
        expect(heroimg.src).toContain(images[i]);
        expect(thumb.classList).toContain("active");
    }
});