# Getting started

## Setting up local developement environment

### Prerequisites
[NodeJs](https://nodejs.org/en/download/) - 10.x.x

1. Clone repository [https://irepo.eur.ad.sag/projects/FLOW/repos/floweditordeveloperguide](https://irepo.eur.ad.sag/projects/FLOW/repos/floweditordeveloperguide)
2. Open the cloned _floweditordeveloperguide_ and open command line in that folder
3. Install yarn globally if not installed using the command `npm i -g yarn`
3. Run command `yarn`
4. Run command `yarn start`
5. Open browser and navigate to [http://localhost:8000](http://localhost:8000/)

## Writing content

### Creating files and folder

1. Find the topic for which content needs to be written
2. Check if the content needs a grouping in the side navigation

    #### Content with grouping
    1. Open the _content_ folder
    2. Add new folder inside content folder with the topic as the name
    3. Then create a file with the same name and `.mdx` as extension
    4. Follow the naming convention of words-separated-by-hyphen for file/folder names

    Note: If you need grouping inside another category (say A>B), follow the above steps inside the respective folder (say A). Here `.mdx` files are required for both folders.

    #### Content without grouping
    1. Open the _content_ folder
    2. Navigate to the folder/topic inside which the content has to be added
    3. Create a file with the topic-name and `.mdx` as extension
    4. Follow the naming convention of words-separated-by-hyphen for file names

    #### Naming the topic using metadata
    1. After creating the file, some text content needed to be added to top of the file
    2. That text defines the title and description of the page
    3. Title provided will be used as the display name in the side navigation
    4. Title also acts as a main header in the page
    5. To add title and description add `---` twice with a empty line in between
    6. Add any of the below options in the format `option: value`
    7. All options must be in its own line

        ##### Options
        + title - Text used in header and side navigation
        + metaTitle - Text used in the title of the page(Browser tab) `webMethods.io | FlowServices`
        + metaDescription - Description used in meta tag for SEO
        + author - Author of the topic
        + date - Date of writing the document

    Note: Only title is mandatory

     #### Adding topic to the concepts panel
     1. Navigate to the getting started page to see the concepts panel
     2. New topics has to be added to that panel
     3. To add a new topic, open the file _src/components/mdxComponents/data.json_
     4. Find the title under which the topic needs to be added
     5. Add a JSON Object `, {}` to the end of the array
     6. Inside object add `"title": "title of the topic",` as key value pair
     7. Add another key value pair `"link":"path/to/the/topic/file/created/without/mdx/extension"`

### Adding content to file

1. Content can be written using markdown format
2. Few HTML Elements are present to

    #### Using Markdown
    Markdown is a lightweight and easy-to-use syntax for styling all forms of writing. Markdown is a way to style text on the web. You control the display of the document; formatting words as bold or italic, adding images, and creating lists are just a few of the things we can do with Markdown. Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like # or *.

    Check this [link](https://www.gatsbyjs.org/docs/mdx/markdown-syntax/) for more info on markdown.

    #### Using Components
    There are certain html/react components which can be used to add functionalities which are not possible with markdown.

    #### FlowService Component
    Flow service component can be used to create a card which will display flow steps as images and text based comments next to them.

    ```html
    <FlowService
        title="Slack - Post message to channel"
        description="The above flow steps are used to find the channel for which the name is testCh and post a message to it"
        textToCopy={flowJSON}
     >
    </FlowService>
    ```
    #### Inputs
    + title - string - Title of the flow card
    + description - string - Description of the flow card
    + textToCopy - json - JSON which will be copied to clipboard

    Note: For json inputs `{}` should be used instead of `""`

    #### FlowStep Component
    Flow Step component should be used only inside the `FlowService` component. It can be used to display a single step of flow service inside the flow card.

    ```jsx
    <FlowStep
       img="getting-started/simple-flowservice/add-services/image-slice_01.png"
       comment="Get Channels list from slack"
    />
    ```
    #### Inputs
    + img - string - Path to the image.
    + comment - string - Comment for the step

    Note: Path should not contain space in it. Use hyphen for space in file/folder names.

### Using assets

- There are two types of assets which can be used inside the markdown file which are image and json

    #### Adding images
    1. Images can be used with components
    2. To add images navigate to _content/assets_ folder
    3. Create folder structure similar to where the `.mdx` file is present
    4. Create one more folder with the name of the `.mdx` file
    5. Keep all the images in this folder

    #### Using images
    1. Currently, images can be used with `FlowStep` component
    2. `FlowStep` component takes image path as string to **img** property
    3. Path will start from inside the _assets_ folder
    4. So for an image _content/assets/feature/topic/topic-1.png_ , the path will be **feature/topic/topic-1.png**

    Note: Image folder/file name cannot contain space. Limit the use of special characters to **-** for separating words and **.** for extension

    #### Adding Json file
    Adding json file is similar to adding images. Please check the _Adding images_ section.
    Json file can be placed adjacent to images of the topic

    #### Using json
    1. Currently, json can be used with `FlowService` component for copying the flow json
    2. `FlowService` component takes json as input for **textToCopy** property
    3. To use json, it needs to be imported to the `.mdx` file
    4. Import statement should be placed immediately next to the metadata of the page
    5. Import statement should be in the format `import flowJson from '../relative/path/to/json/file''`
    6. So for a json file _content/assets/feature/topic/topic.json_, the import will `import flowJson from '../assets/feature/topic/topic.json'`
    7. To use the imported json with `FlowService` component it has to be added to textToCopy property `textToCopy={flowJson}`

    Note: When passing json to property `{}` must be used instead of `""`

Please contact [**Manoj.VigneshS@softwareag.com**](https://teams.microsoft.com/l/chat/0/0?users=Manoj.VigneshS@softwareag.com), [**SanthoshHari.Sridhar@softwareag.com**](https://teams.microsoft.com/l/chat/0/0?users=SanthoshHari.Sridhar@softwareag.com), [**Aleemullah.Samiullah@softwareag.com**](https://teams.microsoft.com/l/chat/0/0?users=Aleemullah.Samiullah@softwareag.com) for any queries.
