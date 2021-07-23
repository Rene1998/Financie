/**
 * Inspector Controls
 */

import times from "lodash/times";
import BoxShadowControl from "../../../utils/components/box-shadow";
import fontOptions from "../../../utils/googlefonts";
import { loadGoogleFont } from "../../../utils/font";

// Setup the block
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { MediaUpload } = wp.blockEditor;

// Import block components
const { InspectorControls, PanelColorSettings, ColorPalette } = wp.editor;

// Import Inspector components
const {
  PanelBody,
  RangeControl,
  SelectControl,
  ToggleControl,
  TabPanel,
  Dashicon,
  BaseControl,
  Button,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends Component {
  constructor(props) {
    super(...arguments);
    this.onSelectImageOne = this.onSelectImageOne.bind(this);
    this.onRemoveImageOne = this.onRemoveImageOne.bind(this);

    this.onRemoveImageTwo = this.onRemoveImageTwo.bind(this);
    this.onSelectImageTwo = this.onSelectImageTwo.bind(this);

    this.onRemoveImageThree = this.onRemoveImageThree.bind(this);
    this.onSelectImageThree = this.onSelectImageThree.bind(this);

    this.onRemoveImageFour = this.onRemoveImageFour.bind(this);
    this.onSelectImageFour = this.onSelectImageFour.bind(this);
    
  }
  /*
    * Event to set Image as null while removing.
    */
  onRemoveImageOne() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundImageOne: null });
  }

  /*
  * Event to set Image as while adding.
  */
  onSelectImageOne(media) {
    const { setAttributes } = this.props;
    const { backgroundImageOne } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backgroundImageOne: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backgroundImageOne: media.url });
  }

  onRemoveImageTwo() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundImageTwo: null });
  }

  onSelectImageTwo(media) {
    const { setAttributes } = this.props;
    const { backgroundImageTwo } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backgroundImageTwo: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backgroundImageTwo: media.url });
  }

  onRemoveImageThree() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundImageThree: null });
  }

  onSelectImageThree(media) {
    const { setAttributes } = this.props;
    const { backgroundImageThree } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backgroundImageThree: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backgroundImageThree: media.url });
  }

  onRemoveImageFour() {
    const { setAttributes } = this.props;

    setAttributes({ backgroundImageFour: null });
  }

  onSelectImageFour(media) {
    const { setAttributes } = this.props;
    const { backgroundImageFour } = this.props.attributes;

    if (!media || !media.url) {
      setAttributes({ backgroundImageFour: null });
      return;
    }

    if (!media.type || "image" != media.type) {
      return;
    }

    setAttributes({ backgroundImageFour: media.url });
  }


  render() {
    // Setup the attributes
    const {
      attributes: {
        count,
        imageboxesBlock,
        itemBackgroundColor,
        itemHoverBackgroundColor,
        titleHeadingTag,
        contentAlign,
        boxRadius,
        hasArrow,
        opacity,
        boxShadowColor,
        boxShadowHOffset,
        boxShadowVOffset,
        boxShadowBlur,
        boxShadowSpread,
        boxShadowPosition,
        boxPaddingRight,
        boxPaddingLeft,
        boxPaddingTop,
        boxPaddingBottom,
        boxHeight,
        backgroundPosition,
        backgroundRepeat,
        backgroundSize,
        secondaryBackgroundColor,
        hoverSecondaryBackgroundColor,
        gradientDegree,
        bgGradient,
        hoverGradientDegree,
        hoverBgGradient,
        imageHoverEffect,
        hoverOpacity,
        titleFontFamily,
        titleFontSize,
        titleFontSizeMobile,
        titleFontSizeTablet,
        titleFontWeight,
        titleLineHeight,
        titleColor,
        descriptionFontFamily,
        descriptionFontSize,
        descriptionFontWeight,
        descriptionLineHeight,
        descriptionColor,
        imageSize,
        verticalAlignment,
        titleSpacing,
        descriptionSpacing,
        arrowColor,
        arrowSize,
        backgroundImageOne,
        backgroundImageTwo,
        backgroundImageThree,
        backgroundImageFour,
      },
      setAttributes,
    } = this.props;

    const fontWeightOptions = [
      {
        value: "",
        label: __("Default", "responsive-block-editor-addons"),
      },
      {
        value: "100",
        label: __("100", "responsive-block-editor-addons"),
      },
      {
        value: "200",
        label: __("200", "responsive-block-editor-addons"),
      },
      {
        value: "300",
        label: __("300", "responsive-block-editor-addons"),
      },
      {
        value: "400",
        label: __("400", "responsive-block-editor-addons"),
      },
      {
        value: "500",
        label: __("500", "responsive-block-editor-addons"),
      },
      {
        value: "600",
        label: __("600", "responsive-block-editor-addons"),
      },
      {
        value: "700",
        label: __("700", "responsive-block-editor-addons"),
      },
      {
        value: "800",
        label: __("800", "responsive-block-editor-addons"),
      },
      {
        value: "900",
        label: __("900", "responsive-block-editor-addons"),
      },
    ];

    // Update color value
    const onChangeBackgroundColor = (value) =>
      setAttributes({ itemBackgroundColor: value });
    const onChangeHoverBackgroundColor = (value) =>
      setAttributes({ itemHoverBackgroundColor: value });
    const onChangeSecondaryBackgroundColor = (value) =>
      setAttributes({ secondaryBackgroundColor: value });
    const onChangeHoverSecondaryBackgroundColor = (value) =>
      setAttributes({ hoverSecondaryBackgroundColor: value });
    const onChangeTitleHeadingTag = (value) =>
      setAttributes({ titleHeadingTag: value });
    const onChangeContentAlign = (value) =>
      setAttributes({ contentAlign: value });
    const onChangeImageHoverEffect = (value) =>
      setAttributes({ imageHoverEffect: value });
    const onChangeBackgroundPosition = (value) =>
      setAttributes({ backgroundPosition: value });
    const onChangeBackgroundRepeat = (value) =>
      setAttributes({ backgroundRepeat: value });
    const onChangeBackgroundSize = (value) =>
      setAttributes({ backgroundSize: value });
    const onChangeImageSize = (value) => setAttributes({ imageSize: value });
    const onChangeVerticalAlignment = (value) =>
      setAttributes({ verticalAlignment: value });
    const onChangeArrowColor = (value) => setAttributes({ arrowColor: value });

    return (
      <InspectorControls key="inspector">
        <PanelBody
          title={__("General", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <RangeControl
            label={__(
              "Number of Image Boxes Blocks",
              "responsive-block-editor-addons"
            )}
            value={count}
            onChange={(newCount) => {
              let cloneTest_block = [...imageboxesBlock];
              if (cloneTest_block.length < newCount) {
                const incAmount = Math.abs(newCount - cloneTest_block.length);

                {
                  times(incAmount, (n) => {
                    cloneTest_block.push({
                      title: "Image Box Title " + newCount,
                      descriptions: "",
                    });
                  });
                }
                setAttributes({ imageboxesBlock: cloneTest_block });
              } else {
                const incAmount = Math.abs(newCount - cloneTest_block.length);
                let data_new = cloneTest_block;
                for (var i = 0; i < incAmount; i++) {
                  data_new.pop();
                }
                setAttributes({ imageboxesBlock: data_new });
              }
              setAttributes({ count: newCount });
            }}
            min={1}
            max={4}
            step={1}
          />
          <RangeControl
            label={__("Height", "responsive-block-editor-addons")}
            value={boxHeight}
            onChange={(newCount) => {
              setAttributes({ boxHeight: newCount });
            }}
            min={100}
            max={700}
            step={1}
          />
          <RangeControl
            label={__("Border Radius", "responsive-block-editor-addons")}
            value={boxRadius}
            onChange={(newCount) => {
              setAttributes({ boxRadius: newCount });
            }}
            min={1}
            max={50}
            step={1}
          />
          <BoxShadowControl
            setAttributes={setAttributes}
            label={__("Box Shadow", "responsive-block-editor-addons")}
            boxShadowColor={{ value: boxShadowColor, label: __("Color") }}
            boxShadowHOffset={{
              value: boxShadowHOffset,
              label: __("Horizontal", "responsive-block-editor-addons"),
            }}
            boxShadowVOffset={{
              value: boxShadowVOffset,
              label: __("Vertical", "responsive-block-editor-addons"),
            }}
            boxShadowBlur={{
              value: boxShadowBlur,
              label: __("Blur", "responsive-block-editor-addons"),
            }}
            boxShadowSpread={{
              value: boxShadowSpread,
              label: __("Spread", "responsive-block-editor-addons"),
            }}
            boxShadowPosition={{
              value: boxShadowPosition,
              label: __("Position", "responsive-block-editor-addons"),
            }}
          />
        </PanelBody>
        <PanelBody
          title={__("Alignment", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <SelectControl
            label={__("Horizontal Alignment")}
            value={contentAlign}
            onChange={onChangeContentAlign}
            options={[
              { value: "center", label: __("Center") },
              { value: "left", label: __("Left") },
              { value: "right", label: __("Right") },
            ]}
          />
          <SelectControl
            label={__("Vertical Alignment")}
            value={verticalAlignment}
            onChange={onChangeVerticalAlignment}
            options={[
              { value: "center", label: __("Center") },
              { value: "flex-start", label: __("Top") },
              { value: "flex-end", label: __("Bottom") },
            ]}
          />
        </PanelBody>

        <PanelBody
          title={__("Background Image", "responsive-block-editor-addons")}
          initialOpen={false}
        >
            <Fragment>
              <BaseControl
                className="editor-bg-image-control"
                label={__(
                  "Background Image 1",
                  "responsive-block-editor-addons"
                )}
              >
                <MediaUpload
                  title={__(
                    "Select Background Image",
                    "responsive-block-editor-addons"
                  )}
                  onSelect={this.onSelectImageOne}
                  allowedTypes={["image"]}
                  value={backgroundImageOne}
                  render={({ open }) => (
                    <Button isDefault onClick={open}>
                      {!backgroundImageOne
                        ? __(
                            "Select Background Image",
                            "responsive-block-editor-addons"
                          )
                        : __("Replace image", "responsive-block-editor-addons")}
                    </Button>
                  )}
                />
                {backgroundImageOne && (
                  <Button
                    className="rbea-rm-btn"
                    onClick={this.onRemoveImageOne}
                    isLink
                    isDestructive
                  >
                    {__("Remove Image", "responsive-block-editor-addons")}
                  </Button>
                )}
              </BaseControl>
              {count >1 && (<BaseControl
                className="editor-bg-image-control"
                label={__(
                  "Background Image 2",
                  "responsive-block-editor-addons"
                )}
              >
                <MediaUpload
                  title={__(
                    "Select Background Image",
                    "responsive-block-editor-addons"
                  )}
                  onSelect={this.onSelectImageTwo}
                  allowedTypes={["image"]}
                  value={backgroundImageTwo}
                  render={({ open }) => (
                    <Button isDefault onClick={open}>
                      {!backgroundImageTwo
                        ? __(
                            "Select Background Image",
                            "responsive-block-editor-addons"
                          )
                        : __("Replace image", "responsive-block-editor-addons")}
                    </Button>
                  )}
                />
                {backgroundImageTwo && (
                  <Button
                    className="rbea-rm-btn"
                    onClick={this.onRemoveImageTwo}
                    isLink
                    isDestructive
                  >
                    {__("Remove Image", "responsive-block-editor-addons")}
                  </Button>
                )}
              </BaseControl>)}
              {(count === 3 || count ===4) && (<BaseControl
                className="editor-bg-image-control"
                label={__(
                  "Background Image 3",
                  "responsive-block-editor-addons"
                )}
              >
                <MediaUpload
                  title={__(
                    "Select Background Image",
                    "responsive-block-editor-addons"
                  )}
                  onSelect={this.onSelectImageThree}
                  allowedTypes={["image"]}
                  value={backgroundImageThree}
                  render={({ open }) => (
                    <Button isDefault onClick={open}>
                      {!backgroundImageThree
                        ? __(
                            "Select Background Image",
                            "responsive-block-editor-addons"
                          )
                        : __("Replace image", "responsive-block-editor-addons")}
                    </Button>
                  )}
                />
                {backgroundImageThree && (
                  <Button
                    className="rbea-rm-btn"
                    onClick={this.onRemoveImageThree}
                    isLink
                    isDestructive
                  >
                    {__("Remove Image", "responsive-block-editor-addons")}
                  </Button>
                )}
              </BaseControl>)}
              {count ===4 && (<BaseControl
                className="editor-bg-image-control"
                label={__(
                  "Background Image 4",
                  "responsive-block-editor-addons"
                )}
              >
                <MediaUpload
                  title={__(
                    "Select Background Image",
                    "responsive-block-editor-addons"
                  )}
                  onSelect={this.onSelectImageFour}
                  allowedTypes={["image"]}
                  value={backgroundImageFour}
                  render={({ open }) => (
                    <Button isDefault onClick={open}>
                      {!backgroundImageFour
                        ? __(
                            "Select Background Image",
                            "responsive-block-editor-addons"
                          )
                        : __("Replace image", "responsive-block-editor-addons")}
                    </Button>
                  )}
                />
                {backgroundImageFour && (
                  <Button
                    className="rbea-rm-btn"
                    onClick={this.onRemoveImageFour}
                    isLink
                    isDestructive
                  >
                    {__("Remove Image", "responsive-block-editor-addons")}
                  </Button>
                )}
              </BaseControl>)}
            </Fragment>
        </PanelBody> 
        <PanelBody
          title={__("Image", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <SelectControl
            label={__("Image Size")}
            value={imageSize}
            onChange={onChangeImageSize}
            options={[
              { value: "full", label: __("Full Size") },
              { value: "thumbnail", label: __("Thumbnail") },
              { value: "medium", label: __("Medium") },
              { value: "large", label: __("Large") },
            ]}
          />
          <SelectControl
            label={__("Background Position")}
            value={backgroundPosition}
            onChange={onChangeBackgroundPosition}
            options={[
              { value: "left top", label: __("Left Top") },
              { value: "left center", label: __("Left Center") },
              { value: "left bottom", label: __("Left Bottom") },
              { value: "right top", label: __("Right Top") },
              { value: "right center", label: __("Right Center") },
              { value: "right bottom", label: __("Right Bottom") },
              { value: "center top", label: __("Center Top") },
              { value: "center center", label: __("Center Center") },
              { value: "center bottom", label: __("Center Bottom") },
            ]}
          />
          <SelectControl
            label={__("Background Repeat")}
            value={backgroundRepeat}
            onChange={onChangeBackgroundRepeat}
            options={[
              { value: "initial", label: __("Initial") },
              { value: "repeat", label: __("Repeat") },
              { value: "no-repeat", label: __("No-Repeat") },
              { value: "round", label: __("Round") },
              { value: "inherit", label: __("Inherit") },
              { value: "space", label: __("Space") },
              { value: "repeat-y", label: __("Repeat Y") },
              { value: "repeat-x", label: __("Repeat X") },
            ]}
          />
          <SelectControl
            label={__("Background Size")}
            value={backgroundSize}
            onChange={onChangeBackgroundSize}
            options={[
              { value: "initial", label: __("Initial") },
              { value: "cover", label: __("Cover") },
              { value: "contain", label: __("Contain") },
              { value: "auto", label: __("Auto") },
              { value: "inherit", label: __("Inherit") },
            ]}
          />
        </PanelBody>
        <PanelColorSettings
          title={__("Overlay Color", "responsive-block-editor-addons")}
          initialOpen={false}
          colorSettings={[
            {
              value: itemBackgroundColor,
              onChange: onChangeBackgroundColor,
              label: __("Background Color", "responsive-block-editor-addons"),
            },
          ]}
        >
          <ToggleControl
            label="Gradient Background"
            checked={bgGradient}
            onChange={() =>
              this.props.setAttributes({
                bgGradient: !bgGradient,
              })
            }
          />
          {bgGradient && (
            <PanelColorSettings
              title={__(
                "Secondary Background Color",
                "responsive-block-editor-addons"
              )}
              initialOpen={true}
              colorSettings={[
                {
                  label: __(
                    "Secondary Background Color",
                    "responsive-block-editor-addons"
                  ),
                  value: secondaryBackgroundColor,
                  onChange: onChangeSecondaryBackgroundColor,
                },
              ]}
            ></PanelColorSettings>
          )}
          {bgGradient && (
            <RangeControl
              label={__("Gradient Degree", "responsive-block-editor-addons")}
              value={gradientDegree}
              onChange={(value) =>
                setAttributes({
                  gradientDegree: value !== undefined ? value : 100,
                })
              }
              min={0}
              max={360}
            />
          )}
          <RangeControl
            label={__(
              "Background Color Opacity",
              "responsive-block-editor-addons"
            )}
            value={opacity}
            onChange={(value) =>
              setAttributes({ opacity: value !== undefined ? value : 70 })
            }
            min={0}
            max={100}
            allowReset
          />
        </PanelColorSettings>
        <PanelColorSettings
          title={__("Hover Overlay Color", "responsive-block-editor-addons")}
          initialOpen={false}
          colorSettings={[
            {
              value: itemHoverBackgroundColor,
              onChange: onChangeHoverBackgroundColor,
              label: __(
                "Hover Background Color",
                "responsive-block-editor-addons"
              ),
            },
          ]}
        >
          <ToggleControl
            label="Gradient Background"
            checked={hoverBgGradient}
            onChange={() =>
              this.props.setAttributes({
                hoverBgGradient: !hoverBgGradient,
              })
            }
          />
          {hoverBgGradient && (
            <PanelColorSettings
              title={__(
                "Secondary Background Color",
                "responsive-block-editor-addons"
              )}
              initialOpen={true}
              colorSettings={[
                {
                  label: __(
                    "Secondary Background Color",
                    "responsive-block-editor-addons"
                  ),
                  value: hoverSecondaryBackgroundColor,
                  onChange: onChangeHoverSecondaryBackgroundColor,
                },
              ]}
            ></PanelColorSettings>
          )}
          {hoverBgGradient && (
            <RangeControl
              label={__("Gradient Degree", "responsive-block-editor-addons")}
              value={hoverGradientDegree}
              onChange={(value) =>
                setAttributes({
                  hoverGradientDegree: value !== undefined ? value : 100,
                })
              }
              min={0}
              max={360}
            />
          )}
          <RangeControl
            label={__(
              "Background Color Opacity",
              "responsive-block-editor-addons"
            )}
            value={hoverOpacity}
            onChange={(value) =>
              setAttributes({ hoverOpacity: value !== undefined ? value : 70 })
            }
            min={0}
            max={100}
            allowReset
          />
        </PanelColorSettings>
        <PanelBody
          title={__("Typography", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <PanelBody
            title={__("Title Typography", "responsive-block-editor-addons")}
            initialOpen={false}
          >
            <SelectControl
              label={__("Title Heading Tag")}
              value={titleHeadingTag}
              onChange={onChangeTitleHeadingTag}
              options={[
                { value: "h1", label: __("H1") },
                { value: "h2", label: __("H2") },
                { value: "h3", label: __("H3") },
                { value: "h4", label: __("H4") },
                { value: "h5", label: __("H5") },
                { value: "h6", label: __("H6") },
              ]}
            />
            <SelectControl
              label={__("Font Family", "responsive-block-editor-addons")}
              options={fontOptions}
              value={titleFontFamily}
              onChange={(value) => {
                setAttributes({
                  titleFontFamily: value,
                }),
                  loadGoogleFont(value);
              }}
            />
            <TabPanel
              className=" responsive-size-type-field-tabs  responsive-size-type-field__common-tabs  responsive-inline-margin"
              activeClass="active-tab"
              tabs={[
                {
                  name: "desktop",
                  title: <Dashicon icon="desktop" />,
                  className:
                    " responsive-desktop-tab  responsive-responsive-tabs",
                },
                {
                  name: "tablet",
                  title: <Dashicon icon="tablet" />,
                  className:
                    " responsive-tablet-tab  responsive-responsive-tabs",
                },
                {
                  name: "mobile",
                  title: <Dashicon icon="smartphone" />,
                  className:
                    " responsive-mobile-tab  responsive-responsive-tabs",
                },
              ]}
            >
              {(tab) => {
                let tabout;

                if ("mobile" === tab.name) {
                  tabout = (
                    <Fragment>
                      <RangeControl
                        label={__(
                          "Font Size",
                          "responsive-block-editor-addons"
                        )}
                        min={0}
                        max={500}
                        value={titleFontSizeMobile}
                        onChange={(value) =>
                          setAttributes({
                            titleFontSizeMobile: value,
                          })
                        }
                      />
                    </Fragment>
                  );
                } else if ("tablet" === tab.name) {
                  tabout = (
                    <Fragment>
                      <RangeControl
                        label={__(
                          "Font Size",
                          "responsive-block-editor-addons"
                        )}
                        min={0}
                        max={500}
                        value={titleFontSizeTablet}
                        onChange={(value) =>
                          setAttributes({
                            titleFontSizeTablet: value,
                          })
                        }
                      />
                    </Fragment>
                  );
                } else {
                  tabout = (
                    <Fragment>
                      <RangeControl
                        label={__(
                          "Font Size",
                          "responsive-block-editor-addons"
                        )}
                        min={0}
                        max={500}
                        value={titleFontSize}
                        onChange={(value) =>
                          setAttributes({
                            titleFontSize: value,
                          })
                        }
                      />
                    </Fragment>
                  );
                }

                return <div>{tabout}</div>;
              }}
            </TabPanel>
            <SelectControl
              label={__("Font Weight", "responsive-block-editor-addons")}
              options={fontWeightOptions}
              value={titleFontWeight}
              onChange={(value) =>
                this.props.setAttributes({
                  titleFontWeight: value,
                })
              }
            />
            <RangeControl
              label={__("Line Height", "responsive-block-editor-addons")}
              value={titleLineHeight}
              onChange={(value) =>
                this.props.setAttributes({
                  titleLineHeight: value,
                })
              }
              min={0}
              max={200}
              step={1}
            />
            <ColorPalette
              label={__("Text Color", "responsive-block-editor-addons")}
              value={titleColor}
              onChange={(colorValue) =>
                setAttributes({ titleColor: colorValue })
              }
              allowReset
            />
          </PanelBody>
          <PanelBody
            title={__(
              "Description Typography",
              "responsive-block-editor-addons"
            )}
            initialOpen={false}
          >
            <SelectControl
              label={__("Font Family", "responsive-block-editor-addons")}
              options={fontOptions}
              value={descriptionFontFamily}
              onChange={(value) => {
                setAttributes({
                  descriptionFontFamily: value,
                }),
                  loadGoogleFont(value);
              }}
            />
            <RangeControl
              label={__("Font Size", "responsive-block-editor-addons")}
              value={descriptionFontSize}
              onChange={(value) =>
                this.props.setAttributes({
                  descriptionFontSize: value,
                })
              }
              min={0}
              max={200}
              step={1}
            />
            <SelectControl
              label={__("Font Weight", "responsive-block-editor-addons")}
              options={fontWeightOptions}
              value={descriptionFontWeight}
              onChange={(value) =>
                this.props.setAttributes({
                  descriptionFontWeight: value,
                })
              }
            />
            <RangeControl
              label={__("Line Height", "responsive-block-editor-addons")}
              value={descriptionLineHeight}
              onChange={(value) =>
                this.props.setAttributes({
                  descriptionLineHeight: value,
                })
              }
              min={0}
              max={200}
              step={1}
            />
            <ColorPalette
              label={__("Text Color", "responsive-block-editor-addons")}
              value={descriptionColor}
              onChange={(colorValue) =>
                setAttributes({ descriptionColor: colorValue })
              }
              allowReset
            />
          </PanelBody>
        </PanelBody>
        <PanelBody
          title={__("Padding", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <RangeControl
            label={__("Box Top Padding", "responsive-block-editor-addons")}
            value={boxPaddingTop}
            onChange={(newCount) => {
              setAttributes({ boxPaddingTop: newCount });
            }}
            min={1}
            max={500}
            step={1}
          />
          <RangeControl
            label={__("Box Left Padding", "responsive-block-editor-addons")}
            value={boxPaddingLeft}
            onChange={(newCount) => {
              setAttributes({ boxPaddingLeft: newCount });
            }}
            min={1}
            max={500}
            step={1}
          />
          <RangeControl
            label={__("Box Right Padding", "responsive-block-editor-addons")}
            value={boxPaddingRight}
            onChange={(newCount) => {
              setAttributes({ boxPaddingRight: newCount });
            }}
            min={1}
            max={50}
            step={1}
          />
          <RangeControl
            label={__("Box Bottom Padding", "responsive-block-editor-addons")}
            value={boxPaddingBottom}
            onChange={(newCount) => {
              setAttributes({ boxPaddingBottom: newCount });
            }}
            min={1}
            max={50}
            step={1}
          />
        </PanelBody>
        <PanelBody
          title={__("Hover Effect", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <SelectControl
            label={__("Hover Effect")}
            value={imageHoverEffect}
            onChange={onChangeImageHoverEffect}
            options={[
              { value: "", label: __("Default") },
              { value: "1.04", label: __("Zoom Out") },
              { value: "1", label: __("Zoom In") },
            ]}
          />
        </PanelBody>
        <PanelBody
          title={__("Spacing", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <RangeControl
            label={__("Title Spacing", "responsive-block-editor-addons")}
            value={titleSpacing}
            onChange={(newCount) => {
              setAttributes({ titleSpacing: newCount });
            }}
            min={-50}
            max={100}
            step={1}
          />
          <RangeControl
            label={__("Description Spacing", "responsive-block-editor-addons")}
            value={descriptionSpacing}
            onChange={(newCount) => {
              setAttributes({ descriptionSpacing: newCount });
            }}
            min={-50}
            max={100}
            step={1}
          />
        </PanelBody>
        <PanelBody
          title={__("Arrow", "responsive-block-editor-addons")}
          initialOpen={false}
        >
          <ToggleControl
            label="Arrow After Content"
            checked={hasArrow}
            onChange={() =>
              this.props.setAttributes({
                hasArrow: !hasArrow,
              })
            }
          />
          <PanelColorSettings
            title={__("Color", "responsive-block-editor-addons")}
            initialOpen={true}
            colorSettings={[
              {
                value: arrowColor,
                onChange: onChangeArrowColor,
                label: __("Color", "responsive-block-editor-addons"),
              },
            ]}
          ></PanelColorSettings>
          <RangeControl
            label={__("Arrow Size", "responsive-block-editor-addons")}
            value={arrowSize}
            onChange={(newCount) => {
              setAttributes({ arrowSize: newCount });
            }}
            min={0}
            max={100}
            step={1}
          />
        </PanelBody>
      </InspectorControls>
    );
  }
}
