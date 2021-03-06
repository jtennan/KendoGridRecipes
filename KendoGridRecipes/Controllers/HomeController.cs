﻿using KendoGridRecipes.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace KendoGridRecipes.Controllers
{
    public class HomeController : Controller
    {
        public HomeController() { }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult SimpleGrid()
        {
            return View("SimpleGrid/Index");
        }

        public IActionResult DataGrid()
        {
            return View("DataGrid/Index");
        }

        public IActionResult TemplateGrid()
        {
            return View("TemplateGrid/Index");
        }

        public IActionResult EventGrid()
        {
            return View("EventGrid/Index");
        }

        public IActionResult DeleteRecord(int id)
        {
            return Ok();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public IActionResult IeNotSupported()
        {
            return View();
        }
    }
}
