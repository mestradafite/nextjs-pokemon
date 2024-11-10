# Dash8

This project is a web application developed with **Next.js**, designed to offer two main functionalities:

- Counter: A simple counter where you can add or subtract a number and view the result in a separate tab.

- Pokémon List: An interface that fetches data from the PokeAPI to display a list of Pokémon. You can add or remove Pokémon from your favorites list.

You can access the live site at: https://yourdomain.com.

## Technologies Used

- [Next.js](https://nextjs.org/): React framework for server-side rendering (SSR) and static site generation.
- [TailwindCSS](https://tailwindcss.com/): Utility-first CSS framework for quickly building custom, responsive designs.
- [Redux Toolkit](https://redux-toolkit.js.org/) - For efficient and maintainable global state management.

## Features

- **Responsive Design**: The website is fully responsive and adapts to different screen sizes, ensuring a seamless experience across devices.
- **Optimized Performance**: Utilizes Next.js features such as server-side rendering (SSR) and static generation for enhanced performance.
- **Modern UI/UX**: Clean, user-friendly design implemented using TailwindCSS for fast and efficient styling.
- **SEO Friendly**: The project is optimized for search engines with Next.js' built-in SEO features.
- **Reusable Components**: UI components are built with reusability in mind to maintain scalability.

## Setup and Installation

To get started with this project, follow the steps below:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

## Folder Structure

```
/components    # Reusable components
/pages         # Application pages
/public        # Static assets (images, fonts, etc.)
/styles        # Global styles and TailwindCSS configuration
```

## Customization

- **TailwindCSS**: Customize your styles by modifying the `tailwind.config.js` file and adding new utility classes as needed.
- **Next.js Pages**: Add new pages by creating `.js` or `.tsx` files in the `/pages` directory.

## Deployment

To deploy this project, consider using platforms such as [Vercel](https://vercel.com/) (the creators of Next.js) for seamless integration and deployment.

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Start the production server:**
   ```bash
   npm start
   ```

Alternatively, you can deploy directly to Vercel by connecting your GitHub repository and following their deployment instructions.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Any suggestions or improvements are welcome!

## License

This project is licensed under the MIT License.
