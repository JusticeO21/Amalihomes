import { render, screen, fireEvent } from "@testing-library/react";
import { HeroCarousel } from "./hero-carousel";

describe("HeroCarousel", () => {
  const mockImages = [
    { imageUrl: "/image1.jpg", imageAlt: "Image 1" },
    { imageUrl: "/image2.jpg", imageAlt: "Image 2" },
    { imageUrl: "/image3.jpg", imageAlt: "Image 3" },
  ];

  it("renders without crashing", () => {
    render(<HeroCarousel images={mockImages} />);

    mockImages.forEach((image) => {
      const img = screen.getByAltText(image.imageAlt);
      expect(img).toBeInTheDocument();
    });
  });

  it("displays the first image initially", () => {
    render(<HeroCarousel images={mockImages} />);
    const firstImage = screen.getByAltText("Image 1");
    expect(firstImage).toBeInTheDocument();
  });

  it("cycles to the next image when next button is clicked", () => {
    render(<HeroCarousel images={mockImages} />);
    fireEvent.click(screen.getByLabelText(/next slide/i));

    const secondImage = screen.getByAltText("Image 2");
    expect(secondImage).toBeInTheDocument();
  });

  it("cycles to the previous image when previous button is clicked", () => {
    render(<HeroCarousel images={mockImages} />);
    fireEvent.click(screen.getByLabelText(/previous slide/i));

    const lastImage = screen.getByAltText("Image 3");
    expect(lastImage).toBeInTheDocument();
  });

  it("wraps to first image when next is clicked on last image", () => {
    render(<HeroCarousel images={mockImages} />);

    fireEvent.click(screen.getByLabelText(/next slide/i));
    fireEvent.click(screen.getByLabelText(/next slide/i));
    fireEvent.click(screen.getByLabelText(/next slide/i));

    const firstImage = screen.getByAltText("Image 1");
    expect(firstImage).toBeInTheDocument();
  });

  it("wraps to last image when previous is clicked on first image", () => {
    render(<HeroCarousel images={mockImages} />);

    fireEvent.click(screen.getByLabelText(/previous slide/i));

    const lastImage = screen.getByAltText("Image 3");
    expect(lastImage).toBeInTheDocument();
  });

  it("navigates to specific slide when thumbnail is clicked", () => {
    render(<HeroCarousel images={mockImages} />);

    const thumbnails = mockImages.map((image) => screen.getByLabelText(image.imageAlt));

    fireEvent.click(thumbnails[1]);

    const secondImage = screen.getByAltText("Image 2");
    expect(secondImage).toBeInTheDocument();
  });

  it("renders correct number of thumbnails (limited to 3)", () => {
    const manyImages = [
      ...mockImages,
      { imageUrl: "/image4.jpg", imageAlt: "Image 4" },
      { imageUrl: "/image5.jpg", imageAlt: "Image 5" },
    ];

    render(<HeroCarousel images={manyImages} />);
    const thumbnails = mockImages.map((image) => screen.getByLabelText(image.imageAlt));
    expect(thumbnails.length).toBe(3); // Ensure only 3 thumbnails are rendered
  });
});
