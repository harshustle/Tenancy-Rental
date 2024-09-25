const Listing = require("../model/listing");
const { listingSchema } = require("../schema.js");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

// new listing form
module.exports.renderNewForm = async (req, res) => {
  console.log(req.user);
  res.render("../views/listings/new.ejs");
};

// show listing
module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", " Listing you requested for does not exist");
    res.redirect("/listings");
  }
  console.log(listing);
  res.render("../views/listings/show.ejs", { listing });
};

// create a new listing
module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;

  console.log(filename, "...", url);
  let result = listingSchema.validate(req.body);
  console.log(result);
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  await newListing.save();
  req.flash("success", " New Listing Created! ");
  res.redirect("/listings");
};

// edit listings
module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", " Listing you requested for does not exist");
    res.redirect("/listings");
  }

  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/c_fill,h_300,w_250")
  res.render("../views/listings/edit.ejs", { listing , originalImageUrl });
};

// update route
module.exports.updateListing = async (req, res) => {
  if (!req.body.listing) {
    throw new ExpressError(404, " Send Valid Data For listing");
  }
  console.log("Update called");
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  console.log("here ", { ...req.body.listing });
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    console.log(url,"...", filename);
    listing.image = { url, filename };
    await listing.save();
  }
  res.redirect(`/listings/${id}`);
  req.flash("success", " Listing Updated! ");
};

// delete route

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  req.flash("success", "Listing Deleted! ");
  res.redirect("/listings");
};
