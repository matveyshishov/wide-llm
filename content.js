function modifyClassProperties(className, properties) {
    const elements = document.getElementsByClassName(className);
  
    for (let i = 0; i < elements.length; i++) {
      for (const property in properties) {
        elements[i].style[property] = properties[property];
      }
    }
  }

var classesToModify = {
    'Message_botMessageBubble__CPGMI': {
        'max-width': '1600px'
    },
    'Message_humanMessageBubble__Nld4j': {
        'max-width': '1600px'
    },
    'PageWithSidebarLayout_mainSection__i1yOg': {
        'max-width': '1600px'
    },
    'md:max-w-3xl': {
        'max-width':'1700px'
    },
    'xl:max-w-3xl': {
        'max-width':'1700px'
    },
    'md:max-w-2xl': {
        'max-width':'1700px'
    },
    '.lg:max-w-[38rem]': {
        'max-width':'1700px'
    },
    '_ytPlayerContainer_132sr_1': {
        'display':'none'
    }
};

for (const className in classesToModify) {
    modifyClassProperties(className, classesToModify[className]);
}
