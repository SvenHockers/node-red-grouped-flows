"use strict";

const fs = require("fs");
const path = require("path");

module.exports = function(RED) {
    const groupsFilePath = path.join(RED.settings.userDir, "nr-grouped-flows-groups.json");

    RED.httpAdmin.get("/nr-grouped-flows/groups", RED.auth.needsPermission("flows.read"), function(req, res) {
        fs.readFile(groupsFilePath, "utf8", function(err, data) {
            if (err) {
                if (err.code === "ENOENT") {
                    res.json({});
                } else {
                    res.status(500).json({ error: err.message });
                }
                return;
            }
            try {
                res.json(JSON.parse(data));
            } catch (parseErr) {
                res.json({});
            }
        });
    });

    RED.httpAdmin.post("/nr-grouped-flows/groups", RED.auth.needsPermission("flows.write"), function(req, res) {
        const data = req.body;
        if (!data || typeof data !== "object" || Array.isArray(data)) {
            res.status(400).json({ ok: false, error: "Invalid request body" });
            return;
        }
        const json = JSON.stringify(data, null, 2);
        fs.writeFile(groupsFilePath, json, "utf8", function(err) {
            if (err) {
                res.status(500).json({ ok: false, error: err.message });
                return;
            }
            res.json({ ok: true });
        });
    });
};
