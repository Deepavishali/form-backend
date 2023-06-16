import Form from "../models/form.js";

export const addform = async (req, res) => {
    try {
        const {
            title,
            classlevel,
            pricing,
            from,
            to,
            modeoflearning,
            classtime,
            description
        } = req.body;
        const newForm = new Form({
            title,
            classlevel,
            pricing,
            from,
            to,
            modeoflearning,
            classtime,
            description
        });
        await newForm.save();
        res.status(200).json({ message: "Form Added successfully" })
    }
    catch(error) {
        res.status(200).json({ message: "Failed to save form details", error })
    }
}

export const editform = async (req, res) => {
    try {
        const {
            title,
            classlevel,
            pricing,
            from,
            to,
            modeoflearning,
            classtime,
            description
        } = req.body;

        const updatedForm = await Form.findOneAndUpdate(
            { _id: req.params.id },
            {
                title,
                classlevel,
                pricing,
                from,
                to,
                modeoflearning,
                classtime,
                description
            },
            { new: true }
        );

        if (!updatedForm) {
            return res.status(404).json({ message: "Form not found" });
        }

        res.status(200).json({ message: "Form updated successfully", form: updatedForm });
    }
    catch (error) {
        res.status(500).json({ message: "Failed to update form", error });
    }
};


export const deleteform = async (req, res) => {
    try {
        const { id } = req.params; // Assuming you have the form ID in the request params

        const deletedForm = await Form.findOneAndDelete({ _id: id }); // Find and delete the form by its ID

        if (!deletedForm) {
            return res.status(404).json({ message: "Form not found" });
        }

        res.status(200).json({ message: "Form deleted successfully", form: deletedForm });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete form", error });
    }
};


export const getAllForms = async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Current page number
    const pageSize = parseInt(req.query.pageSize) || 10; // Number of forms per page

    try {
        const totalForms = await Form.countDocuments();
        const totalPages = Math.ceil(totalForms / pageSize);

        const forms = await Form.find()
            .skip((page - 1) * pageSize)
            .limit(pageSize);

        res.status(200).json({
            forms,
            page,
            pageSize,
            totalPages,
            totalForms,
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve forms.", error });
    }
};
