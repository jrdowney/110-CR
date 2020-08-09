﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PropertyRental.Models;

namespace PropertyRental.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20200803180109_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.6");

            modelBuilder.Entity("PropertyRental.Models.Property", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("bath")
                        .HasColumnType("TEXT");

                    b.Property<string>("description")
                        .HasColumnType("TEXT");

                    b.Property<string>("imageUrl")
                        .HasColumnType("TEXT");

                    b.Property<string>("name")
                        .HasColumnType("TEXT");

                    b.Property<decimal>("price")
                        .HasColumnType("TEXT");

                    b.Property<int>("rooms")
                        .HasColumnType("INTEGER");

                    b.Property<int>("sqrFeet")
                        .HasColumnType("INTEGER");

                    b.HasKey("id");

                    b.ToTable("Properties");
                });
#pragma warning restore 612, 618
        }
    }
}