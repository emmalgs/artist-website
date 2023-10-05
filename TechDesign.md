# Technical Design Document
## Art Website

**Author:** Emma Gerigscott  
**Date:** October 5, 2023

### Table of Contents
- [Goal](#Goal)
- [Resources](#Resources)
- [High-Level Design](#High-Level-Design)
- [Architecture](#Architecture)
- [Shapes](#Shapes)
- [Questions](#Questions)
- [Test Cases](#Test-Cases)
- [Approach](#Approach)
- [Tickets](#Tickets)

### Goal
The goal of this project is to create an art website using TypeScript, React, Vite, and Firebase that allows users to view and interact with the artist's work. The website will be organized into sections for paintings, drawings, an about section, and provide a sign-up option for a newsletter. Additionally, the website should offer space for creative expression and artistic elements.

### Resources

#### Development Tools
- TypeScript
- React
- Vite
- Firebase
- Storybook (for component development and testing)

**Storybook Integration with Vite**: You can find detailed information on how to integrate Storybook with Vite in the official Storybook documentation [here](https://storybook.js.org/docs/react/builders/vite). This resource provides instructions and guidance on setting up Storybook in a Vite project.

The inclusion of Storybook as a development tool will assist in the efficient development and testing of our UI components, aligning with the Atomic Design principles outlined in the architecture section of this document.

### High-Level Design
The high-level design of the website involves creating different components for each section and integrating them into a cohesive website. It will be organized into the following sections:

1. **Splash Page**: The initial landing page for the website.

2. **Navbar**:
   - Paintings: Organized by year (e.g., 2023, 2022, etc.).
   - Drawings: Each drawing displayed as a card with associated text.
   - About:
     - CV
     - Bio + Artist Statement
     - Contact
   - Newsletter Sign-up: Available at the bottom of each page or as a clickable icon on each page.

3. **Artistic Elements**: Incorporate creative elements such as GIFs, easter eggs, sound, etc., to enhance the artistic experience.

### Architecture

To maintain a structured and organized codebase, we will follow the Atomic Design methodology. Atomic Design breaks down the user interface into smaller, reusable components, forming a hierarchy from the smallest building blocks to complete pages. This approach helps in creating a scalable and maintainable application.

#### Atomic Design Principles

1. **Atoms**: The smallest building blocks of the user interface. These can include HTML elements, form inputs, buttons, or other simple UI elements. In the context of this project, atoms may represent basic HTML tags and minimal styling.

2. **Molecules**: Molecules are combinations of atoms that form more complex UI components. For example, a form field (atom) combined with a label (atom) creates a form input molecule. In our project, molecules can represent smaller functional components.

3. **Organisms**: Organisms are larger, more complex components composed of molecules and atoms. For instance, a navbar (organism) might include logo (atom), navigation links (molecules), and a newsletter sign-up form (molecule).

4. **Templates**: Templates define the overall layout of a page and how organisms are arranged on it. In this project, we will have templates for different sections of the website, such as the homepage, paintings section, drawings section, and the about page.

5. **Pages**: The highest level of the hierarchy, pages are specific instances of templates with real content. In this context, each webpage (splash page, paintings page, drawings page, about page) will be a page component that utilizes the corresponding template.

#### Directory Structure

To implement Atomic Design principles in the project's file structure, we'll organize components into the following directories:

```
src/
|-- components/
|   |-- atoms/
|   |   |-- Button.tsx
|   |   |-- ...
|   |-- molecules/
|   |   |-- FormInput.tsx
|   |   |-- ...
|   |-- organisms/
|   |   |-- Navbar.tsx
|   |   |-- ...
|   |-- templates/
|   |   |-- HomePage.tsx
|   |   |-- PaintingsPage.tsx
|   |   |-- ...
|   |-- pages/
|       |-- SplashPage.tsx
|       |-- PaintingsPage.tsx
|       |-- ...
|
|-- assets/
|   |-- images/
|   |   |-- ...
|
|-- ...

```

- **Atoms**: Contains the smallest and most basic UI components, such as buttons, input fields, and text elements.

- **Molecules**: Houses more complex components formed by combining atoms, such as form inputs with labels.

- **Organisms**: Contains larger and more functional components that make use of molecules and atoms to create sections like the navbar.

- **Templates**: Defines the layout structure for specific types of pages, incorporating organisms, molecules, and atoms to create consistent page structures.

- **Pages**: Represents actual pages of the website, utilizing templates and containing real content.

- **Assets**: Stores static assets like images, which can be used across the application.

### Shapes
To implement this design, we'll create the following components:

1. **SplashPage**: Displayed when users initially visit the website.

2. **Navbar**: Navigation bar with links to different sections.

3. **Paintings**: Display paintings organized by year using Firebase data.

4. **Drawings**: Display drawings as cards, fetching data from Firebase.

5. **AboutSection**:
   - CV
   - Bio + Artist Statement
   - Contact

6. **NewsletterSignup**: Sign-up form for the newsletter.

7. **ArtisticElements**: Implement creative elements such as GIFs, easter eggs, sound, etc., to enhance the artistic experience.

### Questions
1. What format will the image data be stored in Firebase, and how will it be organized?
2. Should the artistic elements (GIFs, sound, etc.) be interactive or passive?
3. Are there any specific design preferences or creative elements you'd like to include?

### Test Cases
- Verify that the website loads successfully.
- Ensure that navigation links in the navbar work correctly.
- Test image retrieval and display in the Paintings and Drawings sections.
- Verify that the About section displays the CV, Bio, Artist Statement, and Contact information.
- Test the functionality of the newsletter sign-up form.
- Confirm the presence and functionality of artistic elements.

### Approach
1. **Frontend Development**:
   - Create React components for each section.
   - Implement routing using React Router to handle navigation.
   - Fetch data from Firebase for the Paintings and Drawings sections.
   - Design and integrate artistic elements to enhance the user experience.

2. **Backend Integration**:
   - Set up Firebase for image and data storage.
   - Implement Firebase authentication for the newsletter sign-up.

3. **Testing**:
   - Write unit tests for each component.
   - Conduct user testing to ensure usability and artistic appeal.

4. **Deployment**:
   - Deploy the website to a hosting platform (e.g., Firebase Hosting, Vercel, Netlify).

### Tickets
1. **Create SplashPage Component**: Create the initial landing page component.

2. **Implement Navbar Component**: Develop the navigation bar component with links to various sections.

3. **Build Paintings Component**: Create the component to display paintings organized by year.

4. **Design Drawings Component**: Develop the component to display drawings as cards with associated text.

5. **Create AboutSection Component**: Build the About section component with CV, Bio, Artist Statement, and Contact sub-sections.

6. **Develop NewsletterSignup Component**: Implement the newsletter sign-up form component.

7. **Incorporate ArtisticElements**: Add artistic elements, GIFs, easter eggs, sound, etc., to enhance creativity.

8. **Integrate Firebase Backend**: Set up Firebase for image and data storage, and implement authentication for the newsletter sign-up.

9. **Write Unit Tests**: Create unit tests for each component to ensure functionality and correctness.

10. **User Testing**: Conduct user testing to gather feedback and make necessary improvements.

11. **Deployment**: Deploy the website to a hosting platform for public access.

This technical design document outlines the approach and components required to meet the requirements for the art website project. Further details and implementation specifics will be provided in individual development tasks.