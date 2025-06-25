
# Client Vite React TypeScript Front End
This React Client side package is intended to be a template of react website with navigation, forms, pages, dynamic data driven functions. 

It will be turned into a tutorial on github.io website as a blog style tutorial series. 

Basic build contains a Node based server side basic api functionality of reading files and image folders. 

Any Language api can be used whether it is node for basic testing or an existing PHP api or Spring Boot API can also be used. 



# Components
    Each page has component placements of content and or data driven sections of the site. 
    Review each component couplings within each page by reviewing the imports and naming conventions.
    Some components are workshops, products and studios, calendar and forms for engagement
# Forms
    3 forms Contact Form, Footer Newsletter Signup and Newsletter Remedies Block 
        featuring google recaptcha via the hooks/useCaptcha.tsx 
        field validations
    Contact form presented in a modal placement in app.tsx and facilitates most contact and signup buttons via the bootstrap modal framework.
    Newsletter Remedies Block - placed on Apothecary page to sign up for product therapy remedies information as an example category newsletter signup. Layout needs some refinements.
    Footer Newsletter - found in Footer component and subcomponent of NewsletterFooterBlock

    All forms utilize the contact api model to send a form to the server. In this case, the model uses external PHP api for the server end of the site. 
    This is a missing functionality of the Node server.cjs integration and do be handled as needed by external means for version 2.

    These forms can be integrated with third party newsletter and emailing platforms. 


# Pages
    Navigation Pages and their routes found in App.tsx that match the navigation. 
        Artfolio - 
            Image Galleries of photographs organized by folders and an array of categories
        Artelliers - 
            Inner pages Workshops, Studios and Apothecary (Storefront) found via the carousel font color needs attention for visibility.
            Studios represent a body of images of three studios and presents in a tabbed view. 
                Studios can add a feeder image to link to the booking calendar V3 option.
            Apothecary (storefront) handles products from a json string. 
                Feature Products contains a differnt productblends.json as the featured elements
                Deficit in node api to present only products.json. 
                PHP api handles categories as all, serums,soap, oils, by joining both files into one ensure the fields are named the same. oils represent the essential oils which are used in the blends. tbd how to manage sorting of the added categories. 
                
        Home Page Artfolio Collabs - Calendar
            Calendar found via ArtfolioCollabBlock button to 'Check Dates'
            StudioCollabBlock engages buttons to 
        Projects - 
            Project Summary, Project Carousel of motos and sumation of benefits
            Project Image Galleries based on project folders defined in an array of categories matched to the button tabs. 
        Creds - Credential information specific to personal. 
            Highlights - Awards, Acolades, Education. 
            Summation of the employee model behaviors.

# Footer
    Footer represents different content of each of the navigation pages.
    It needs to properly find the location of the tab when clicking on sub sections of artelier studios for instance. Future v3
 