/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from "../../generateCSS";
import generateCSSUnit from "../../generateCSSUnit";

function EditorStyles(props) {
  const {
    classMigrate,
    headingAlign,
    companyColor,
    descColor,
    authorColor,
    nameFontSizeType,
    nameFontSize,
    nameFontSizeTablet,
    nameFontSizeMobile,
    nameFontFamily,
    nameFontWeight,
    nameLineHeightType,
    nameLineHeight,
    nameLineHeightTablet,
    nameLineHeightMobile,
    companyFontSizeType,
    companyFontSize,
    companyFontSizeTablet,
    companyFontSizeMobile,
    companyFontFamily,
    companyFontWeight,
    companyLineHeightType,
    companyLineHeight,
    companyLineHeightTablet,
    companyLineHeightMobile,
    descFontSizeType,
    descFontSize,
    descFontSizeTablet,
    descFontSizeMobile,
    descFontFamily,
    descFontWeight,
    descLineHeightType,
    descLineHeight,
    descLineHeightTablet,
    descLineHeightMobile,
    descSpace,
    nameSpace,
    imgVrPadding,
    imgHrPadding,
    imageWidth,
    rowGap,
    columnGap,
    contentPadding,
    backgroundColor,
    backgroundImage,
    backgroundPosition,
    backgroundSize,
    backgroundRepeat,
    backgroundImageColor,
    backgroundOpacity,
    borderStyle,
    borderWidth,
    borderRadius,
    borderColor,
    arrowColor,
    test_item_count,
    columns,
    arrowDots,
    arrowSize,
    blockPadding,
  } = props.attributes;

  var img_align = "center";

  if (headingAlign == "left") {
    img_align = "flex-start";
  } else if (headingAlign == "right") {
    img_align = "flex-end";
  }

  var position = backgroundPosition.replace("-", " ");

  var selectors = {
    " ": {
      "padding": generateCSSUnit(blockPadding, "px"),
    },
    " .responsive-block-editor-addons-testimonial__wrap": {
      "padding-left": generateCSSUnit(columnGap / 2, "px"),
      "padding-right": generateCSSUnit(columnGap / 2, "px"),
      "margin-bottom": generateCSSUnit(rowGap, "px"),
    },
    " .responsive-block-editor-addons-testimonial__wrap .responsive-block-editor-addons-tm__image-content": {
      "padding-left": generateCSSUnit(imgHrPadding, "px"),
      "padding-right": generateCSSUnit(imgHrPadding, "px"),
      "padding-top": generateCSSUnit(imgVrPadding, "px"),
      "padding-bottom": generateCSSUnit(imgVrPadding, "px"),
    },
    " .responsive-block-editor-addons-tm__image-position-top .responsive-block-editor-addons-tm__image-content": {
      "justify-content": img_align,
    },
    // Image
    " .responsive-block-editor-addons-tm__image img": {
      width: generateCSSUnit(imageWidth, "px"),
      "max-width": generateCSSUnit(imageWidth, "px"),
    },
    " .responsive-block-editor-addons-tm__content": {
      "text-align": headingAlign,
      padding: generateCSSUnit(contentPadding, "px"),
    },
    // Prefix Style
    " .responsive-block-editor-addons-tm__author-name": {
      "font-size": generateCSSUnit(nameFontSize, "px"),
      "font-family": nameFontFamily,
      "font-weight": nameFontWeight,
      "line-height": generateCSSUnit(nameLineHeight, "px"),
      color: authorColor,
      "margin-bottom": generateCSSUnit(nameSpace, "px"),
    },
    // Title Style
    " .responsive-block-editor-addons-tm__company": {
      "font-size": generateCSSUnit(companyFontSize, "px"),
      "font-family": companyFontFamily,
      "font-weight": companyFontWeight,
      "line-height": generateCSSUnit(companyLineHeight, "px"),
      color: companyColor,
    },
    // Description Style
    " .responsive-block-editor-addons-tm__desc": {
      "font-size": generateCSSUnit(descFontSize, "px"),
      "font-family": descFontFamily,
      "font-weight": descFontWeight,
      "line-height": generateCSSUnit(descLineHeight, descLineHeightType),
      color: descColor,
      "margin-bottom": generateCSSUnit(descSpace, "px"),
    },
    " .responsive-block-editor-addons-testimonial__wrap.responsive-block-editor-addons-tm__bg-type-color .responsive-block-editor-addons-tm__content": {
      "background-color": backgroundColor,
    },
    " .responsive-block-editor-addons-testimonial__wrap.responsive-block-editor-addons-tm__bg-type-image .responsive-block-editor-addons-tm__content": {
      "background-image": backgroundImage
        ? `url(${backgroundImage.url})`
        : null,
      "background-position": position,
      "background-repeat": backgroundRepeat,
      "background-size": backgroundSize,
    },
    " .responsive-block-editor-addons-testimonial__wrap.responsive-block-editor-addons-tm__bg-type-image .responsive-block-editor-addons-tm__overlay": {
      "background-color": backgroundImageColor,
      opacity:
        typeof backgroundOpacity != "undefined"
          ? (100 - backgroundOpacity) / 100
          : 0.5,
    },
  };

  if (test_item_count == columns) {
    selectors[".responsive-block-editor-addons-slick-carousel"] = {
      padding: "0",
    };
  }

  if (borderStyle != "none") {
    selectors[
      " .responsive-block-editor-addons-testimonial__wrap .responsive-block-editor-addons-tm__content"
    ] = {
      "border-style": borderStyle,
      "border-color": borderColor,
      "border-width": generateCSSUnit(borderWidth, "px"),
      "border-radius": generateCSSUnit(borderRadius, "px"),
    };
  } else {
    selectors[
      " .responsive-block-editor-addons-testimonial__wrap .responsive-block-editor-addons-tm__content"
    ] = {
      "border-radius": generateCSSUnit(borderRadius, "px"),
    };
  }

  if (arrowDots === "dots") {
    selectors[
      " .responsive-block-editor-addons-slick-carousel.responsive-block-editor-addons-tm__arrow-outside"
    ] = {
      padding: "0 0 35px 0",
    };
  }

  if (test_item_count === 1 || test_item_count === columns) {
    selectors[
      " .responsive-block-editor-addons-slick-carousel.responsive-block-editor-addons-tm__arrow-outside"
    ] = {
      padding: "0",
    };
  }

  var mobile_selectors = {
    " .responsive-block-editor-addons-tm__desc": {
      "font-size": generateCSSUnit(descFontSizeMobile, descFontSizeType),
      "line-height": generateCSSUnit(descLineHeightMobile, descLineHeightType),
    },
    " .responsive-block-editor-addons-tm__company": {
      "font-size": generateCSSUnit(companyFontSizeMobile, companyFontSizeType),
      "line-height": generateCSSUnit(
        companyLineHeightMobile,
        companyLineHeightType
      ),
    },
    " .responsive-block-editor-addons-tm__author-name": {
      "font-size": generateCSSUnit(nameFontSizeMobile, nameFontSizeType),
      "line-height": generateCSSUnit(nameLineHeightMobile, nameLineHeightType),
    },
  };

  var tablet_selectors = {
    " .responsive-block-editor-addons-tm__desc": {
      "font-size": generateCSSUnit(descFontSizeTablet, descFontSizeType),
      "line-height": generateCSSUnit(descLineHeightTablet, descLineHeightType),
    },
    " .responsive-block-editor-addons-tm__company": {
      "font-size": generateCSSUnit(companyFontSizeTablet, companyFontSizeType),
      "line-height": generateCSSUnit(
        companyLineHeightTablet,
        companyLineHeightType
      ),
    },
    " .responsive-block-editor-addons-tm__author-name": {
      "font-size": generateCSSUnit(nameFontSizeTablet, nameFontSizeType),
      "line-height": generateCSSUnit(nameLineHeightTablet, nameLineHeightType),
    },
    " .responsive-block-editor-addons-tm__content": {
      "text-align": "center",
    },
  };

  var styling_css = "";
  var id = `.responsive-block-editor-addons-block-${props.clientId.substr(
    0,
    8
  )}`;

  styling_css = generateCSS(selectors, id);
  styling_css += generateCSS(tablet_selectors, id, true, "tablet");
  styling_css += generateCSS(mobile_selectors, id, true, "mobile");

  return styling_css;
}

export default EditorStyles;
